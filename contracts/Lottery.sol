// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

contract Lottery is Ownable, Pausable {
  uint256 constant RouterBSCMainnet = 56;
  uint256 constant RouterBSCTestnet = 97;

  uint256 public   lotteryId;
  uint256 public   numOfTickets;
  uint256 public   ticketPrice;
  uint256[] public prizes;
  IERC20 public    tokenIERC20;
  IUniswapV2Router02 router;

  uint256[] public lastBuyTickets;

  struct LotteryStruct {
    uint256 createdAt;
    uint256 endedAt;
    uint256 ticketsSold;
    uint256[] winnersTickets;
    address[] winners;
    address[] tickets;
  }

  mapping(uint256 => LotteryStruct) lotteries;
  
  receive() external payable {}

  constructor(address tokenToPay) {
    lotteryId    = 0;
    numOfTickets = 30;
    ticketPrice  = 2500000000000000;
    prizes       = [50, 30, 15];

    tokenIERC20  = IERC20(tokenToPay);

    if (block.chainid == RouterBSCMainnet) {
      router = IUniswapV2Router02(0x10ED43C718714eb63d5aA57B78B54704E256024E);
    } else if (block.chainid == RouterBSCTestnet) {
      router = IUniswapV2Router02(0xD99D1c33F9fC3444f8101754aBC46c52416550D1);
    } else {
      revert("Not valid");
    }

    startNewLottery();
  }

  function buyTickets(uint256[] memory tickets) external payable whenNotPaused {
    require(tickets.length > 0, 'Invalid tickets');
    require(msg.value >= ticketPrice * tickets.length, "Invalid amount");

    LotteryStruct storage lottery = lotteries[lotteryId];
   
    for (uint256 i = 0; i < tickets.length; i++) {
      uint256 ticketNum = tickets[i];
      if (lottery.tickets[ticketNum] != address(0)) {
        revert("failed");
      }
      lottery.tickets[ticketNum] = msg.sender;
      lottery.ticketsSold++;
    }

    lastBuyTickets = tickets;

    if (lottery.ticketsSold == numOfTickets) {
      uint256 amountBNB = numOfTickets * ticketPrice;
      swapTokens(amountBNB);
      pickWinners();
      startNewLottery();
    }
  }

  function cancelTickets(uint256[] memory tickets) external whenNotPaused {
    LotteryStruct storage lottery = lotteries[lotteryId];
    for (uint256 i = 0; i < tickets.length; i++) {
      uint256 ticketNum = tickets[i];
      if (lottery.tickets[ticketNum] != msg.sender) {
        revert();
      }
      lottery.tickets[ticketNum] = address(0);
      lottery.ticketsSold--;
    }
  }

  function pickWinners() private  {
    bool success;
    bool[30] memory chosen;
    LotteryStruct storage lottery = lotteries[lotteryId];
    uint256 rnd = block.timestamp % numOfTickets;
    uint256 picked = 0;
    lottery.endedAt = block.timestamp;
    uint256 totalRewardToken = tokenIERC20.balanceOf(address(this));
    for (uint256 i=0; picked < 3; i++) {
      rnd = uint(keccak256(abi.encodePacked(block.timestamp, rnd, i))) % numOfTickets;
      if (chosen[rnd] == false) {
        lottery.winners[picked] = lottery.tickets[rnd];
        lottery.winnersTickets[picked] = rnd;
        chosen[rnd] = true;
        (success) = tokenIERC20.transfer(address(lottery.winners[picked]), totalRewardToken * prizes[picked] / 100);
        picked++;
      }
    }
  }

  function startNewLottery() private {
    LotteryStruct memory newLottery;
    newLottery.createdAt = block.timestamp;
    newLottery.tickets = new address[](30);
    newLottery.winners = new address[](3);
    newLottery.winnersTickets = new uint256[](3);

    lotteryId++;
    lotteries[lotteryId] = newLottery;    
    lastBuyTickets = new uint256[](0);
  }

  function swapTokens(uint256 amount) private {
    require(address(this).balance >= amount, 'Invalid swap amount');

    address[] memory path = new address[](2);
    path[0] = router.WETH();
    path[1] = address(tokenIERC20);

    router.swapExactETHForTokensSupportingFeeOnTransferTokens{value: amount}(
      0,
      path,
      address(this),
      block.timestamp
    );
  }

  function getLottery(uint256 _id) public view returns (
    uint256 id,
    uint256 createdAt, 
    uint256 endedAt, 
    address[] memory tickets,
    address[] memory winners,
    uint256[] memory ticketsWinners
  ) {
    LotteryStruct storage lottery = lotteries[_id];

    id             = _id;
    createdAt      = lottery.createdAt;
    endedAt        = lottery.endedAt;
    ticketsWinners = lottery.winnersTickets;
    tickets        = lottery.tickets;
    winners        = lottery.winners;
  }

  function getActiveLottery() external view returns (
    uint256 id,
    uint256 startedAt, 
    uint256 endedAt, 
    address[] memory tickets,
    address[] memory winners,
    uint256[] memory ticketsWinners
  ) {
    return getLottery(lotteryId);
  }

  function getLastBuyTickets() external view returns(uint256[] memory lastTickets) {
    return lastBuyTickets;
  }

  function emergencyWithdraw() public onlyOwner whenPaused {
    uint etherBalance = address(this).balance;
    payable(owner()).transfer(etherBalance);
  }

  function setPrizes(uint256[] memory newPrizes, uint256 newTicketPrice) external onlyOwner {
    require(newPrizes[0] + newPrizes[1] + newPrizes[2] < 100, 'Inavalid prizes');
    prizes      = newPrizes;
    ticketPrice = newTicketPrice;
  }

  function setTicketPrice(uint256 newPrice) external onlyOwner {
    require(newPrice > 0, 'Invalid price');

    ticketPrice = newPrice;
  }

  function setTokenPayer(address newTokenAddress) external onlyOwner {
    tokenIERC20  = IERC20(newTokenAddress);
  }

  function emergencyWithdrawBEP20(address tokenAddress, address to, uint amount) public onlyOwner {
    IERC20(tokenAddress).transfer(to, amount);
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }
}
