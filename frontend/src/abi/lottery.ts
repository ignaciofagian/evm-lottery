export default {
  "_format": "hh-sol-artifact-1",
  "contractName": "Lottery",
  "sourceName": "contracts/Lottery.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenToPay",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tickets",
          "type": "uint256[]"
        }
      ],
      "name": "buyTickets",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tickets",
          "type": "uint256[]"
        }
      ],
      "name": "cancelTickets",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencyWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "emergencyWithdrawBEP20",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getActiveLottery",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endedAt",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "tickets",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "winners",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ticketsWinners",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLastBuyTickets",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "lastTickets",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getLottery",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endedAt",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "tickets",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "winners",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ticketsWinners",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "lastBuyTickets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lotteryId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numOfTickets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "prizes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "newPrizes",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "newTicketPrice",
          "type": "uint256"
        }
      ],
      "name": "setPrizes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newTokenAddress",
          "type": "address"
        }
      ],
      "name": "setTokenPayer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ticketPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenIERC20",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162001c8738038062001c87833981016040819052620000349162000402565b6200003f336200015a565b6000805460ff60a01b191681556001556032600255620186a0600390815560408051606081018252601e815260146020820152600a918101919091526200008a916004919062000300565b50600580546001600160a01b0319166001600160a01b0383161790554660371901620000dc57600680546001600160a01b0319167310ed43c718714eb63d5aa57b78b54704e256024e17905562000149565b606146036200011157600680546001600160a01b03191673d99d1c33f9fc3444f8101754abc46c52416550d117905562000149565b60405162461bcd60e51b8152602060048201526009602482015268139bdd081d985b1a5960ba1b604482015260640160405180910390fd5b62000153620001aa565b506200045c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620001e46040518060c001604052806000815260200160008152602001600081526020016060815260200160608152602001606081525090565b428152604080516032808252610660820190925290602082016106408036833750505060a08201526040805160038082526080820190925290602082016060803683375050506080828101919091526040805160038082529281019091529060208201606080368337505050606082015260018054906000620002678362000434565b9190505550806008600060015481526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190620002be92919062000355565b5060808201518051620002dc91600484019160209091019062000393565b5060a08201518051620002fa91600584019160209091019062000393565b50505050565b82805482825590600052602060002090810192821562000343579160200282015b8281111562000343578251829060ff1690559160200191906001019062000321565b5062000351929150620003eb565b5090565b82805482825590600052602060002090810192821562000343579160200282015b828111156200034357825182559160200191906001019062000376565b82805482825590600052602060002090810192821562000343579160200282015b828111156200034357825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620003b4565b5b80821115620003515760008155600101620003ec565b6000602082840312156200041557600080fd5b81516001600160a01b03811681146200042d57600080fd5b9392505050565b6000600182016200045557634e487b7160e01b600052601160045260246000fd5b5060010190565b61181b806200046c6000396000f3fe60806040526004361061012e5760003560e01c80638a185495116100ab578063d0fbe7fe1161006f578063d0fbe7fe1461031f578063db2e21bc14610332578063e580f47b14610347578063eb09fe751461035d578063eccb3a4f1461037d578063f2fde38b1461039d57600080fd5b80638a185495146102775780638da5cb5b1461028d5780638dfb9b4f146102bf57806392e845f6146102df578063cc4b834c146102ff57600080fd5b80635c975abb116100f25780635c975abb146101e15780636a6f44da1461020b578063715018a61461022d5780637aa4e29b146102425780638456cb591461026257600080fd5b80630ac38d8d1461013a5780631209b1f61461016d578063127f9fb1146101835780631a55acdf146101aa5780633f4ba83a146101cc57600080fd5b3661013557005b600080fd5b34801561014657600080fd5b5061015a6101553660046113e9565b6103bd565b6040519081526020015b60405180910390f35b34801561017957600080fd5b5061015a60035481565b34801561018f57600080fd5b506101986103de565b60405161016496959493929190611476565b3480156101b657600080fd5b506101ca6101c53660046114e3565b610406565b005b3480156101d857600080fd5b506101ca61048f565b3480156101ed57600080fd5b50600054600160a01b900460ff166040519015158152602001610164565b34801561021757600080fd5b506102206104a1565b6040516101649190611524565b34801561023957600080fd5b506101ca6104f9565b34801561024e57600080fd5b506101ca61025d3660046115ef565b61050b565b34801561026e57600080fd5b506101ca6105f9565b34801561028357600080fd5b5061015a60025481565b34801561029957600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610164565b3480156102cb57600080fd5b506101ca6102da36600461162c565b610609565b3480156102eb57600080fd5b506101986102fa3660046113e9565b610633565b34801561030b57600080fd5b506101ca61031a366004611649565b610772565b6101ca61032d3660046115ef565b61083f565b34801561033e57600080fd5b506101ca610a39565b34801561035357600080fd5b5061015a60015481565b34801561036957600080fd5b506005546102a7906001600160a01b031681565b34801561038957600080fd5b5061015a6103983660046113e9565b610a94565b3480156103a957600080fd5b506101ca6103b836600461162c565b610aa4565b600781815481106103cd57600080fd5b600091825260209091200154905081565b600080600060608060606103f3600154610633565b949b939a50919850965094509092509050565b61040e610b1d565b610416610b77565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af1158015610465573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610489919061168e565b50505050565b610497610b1d565b61049f610bc7565b565b606060078054806020026020016040519081016040528092919081815260200182805480156104ef57602002820191906000526020600020905b8154815260200190600101908083116104db575b5050505050905090565b610501610b1d565b61049f6000610c1c565b610513610c6c565b6001546000908152600860205260408120905b82518110156105f4576000838281518110610543576105436116b0565b60200260200101519050336001600160a01b031683600501828154811061056c5761056c6116b0565b6000918252602090912001546001600160a01b03161461058b57600080fd5b60008360050182815481106105a2576105a26116b0565b6000918252602082200180546001600160a01b0319166001600160a01b039390931692909217909155600284018054916105db836116dc565b91905055505080806105ec906116f3565b915050610526565b505050565b610601610b1d565b61049f610cb9565b610611610b1d565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60008181526008602090815260409182902080546001820154600383018054865181870281018701909752808752879693959294606094859485949293919291908301828280156106a357602002820191906000526020600020905b81548152602001906001019080831161068f575b505050505091508060050180548060200260200160405190810160405280929190818152602001828054801561070257602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106e4575b505050505093508060040180548060200260200160405190810160405280929190818152602001828054801561076157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610743575b505050505092505091939550919395565b61077a610b1d565b60648260028151811061078f5761078f6116b0565b6020026020010151836001815181106107aa576107aa6116b0565b6020026020010151846000815181106107c5576107c56116b0565b60200260200101516107d7919061170c565b6107e1919061170c565b106108255760405162461bcd60e51b815260206004820152600f60248201526e496e6176616c6964207072697a657360881b60448201526064015b60405180910390fd5b8151610838906004906020850190611315565b5060035550565b610847610c6c565b600081511161088a5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964207469636b65747360881b604482015260640161081c565b80516003546108999190611725565b3410156108d95760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b604482015260640161081c565b6001546000908152600860205260408120905b82518110156109e6576000838281518110610909576109096116b0565b6020026020010151905060006001600160a01b0316836005018281548110610933576109336116b0565b6000918252602090912001546001600160a01b03161461097e5760405162461bcd60e51b815260206004820152600660248201526519985a5b195960d21b604482015260640161081c565b33836005018281548110610994576109946116b0565b6000918252602082200180546001600160a01b0319166001600160a01b039390931692909217909155600284018054916109cd836116f3565b91905055505080806109de906116f3565b9150506108ec565b5081516109fa906007906020850190611315565b50600254816002015403610a35576000600354600254610a1a9190611725565b9050610a2581610cfc565b610a2d610efa565b6105f46111ce565b5050565b610a41610b1d565b610a49610b77565b47610a5c6000546001600160a01b031690565b6001600160a01b03166108fc829081150290604051600060405180830381858888f19350505050158015610a35573d6000803e3d6000fd5b600481815481106103cd57600080fd5b610aac610b1d565b6001600160a01b038116610b115760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161081c565b610b1a81610c1c565b50565b6000546001600160a01b0316331461049f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161081c565b600054600160a01b900460ff1661049f5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161081c565b610bcf610b77565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff161561049f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161081c565b610cc1610c6c565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610bff3390565b6005546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa158015610d44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d68919061173c565b1015610dac5760405162461bcd60e51b8152602060048201526013602482015272125b9d985b1a59081cddd85c08185b5bdd5b9d606a1b604482015260640161081c565b6040805160028082526060820183526000926020830190803683375050600654604080516315ab88c960e31b815290519394506001600160a01b039091169263ad5c4648925060048083019260209291908290030181865afa158015610e16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3a9190611755565b81600081518110610e4d57610e4d6116b0565b6001600160a01b039283166020918202929092010152600554825191169082906001908110610e7e57610e7e6116b0565b6001600160a01b03928316602091820292909201015260065460405163b6f9de9560e01b815291169063b6f9de95908490610ec490600090869030904290600401611772565b6000604051808303818588803b158015610edd57600080fd5b505af1158015610ef1573d6000803e3d6000fd5b50505050505050565b6000610f04611360565b6001546000908152600860205260408120600254909190610f2590426117bd565b4260018401556005546040516370a0823160e01b815230600482015291925060009182916001600160a01b0316906370a0823190602401602060405180830381865afa158015610f79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9d919061173c565b905060005b6003831015610ef15760025460408051426020820152908101869052606081018390526080016040516020818303038152906040528051906020012060001c610feb91906117bd565b9350858460328110610fff57610fff6116b0565b602002015115156000036111bc57846005018481548110611022576110226116b0565b6000918252602090912001546004860180546001600160a01b039092169185908110611050576110506116b0565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555083856003018481548110611094576110946116b0565b60009182526020909120015560018685603281106110b4576110b46116b0565b911515602090920201526005546004860180546001600160a01b039092169163a9059cbb9190869081106110ea576110ea6116b0565b9060005260206000200160009054906101000a90046001600160a01b031660646004878154811061111d5761111d6116b0565b9060005260206000200154866111339190611725565b61113d91906117d1565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015611188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ac919061168e565b9650826111b8816116f3565b9350505b806111c6816116f3565b915050610fa2565b6112076040518060c001604052806000815260200160008152602001600081526020016060815260200160608152602001606081525090565b428152604080516032808252610660820190925290602082016106408036833750505060a08201526040805160038082526080820190925290602082016060803683375050506080828101919091526040805160038082529281019091529060208201606080368337505050606082015260018054906000611288836116f3565b91905055508060086000600154815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030190805190602001906112dd929190611315565b50608082015180516112f991600484019160209091019061137f565b5060a0820151805161048991600584019160209091019061137f565b828054828255906000526020600020908101928215611350579160200282015b82811115611350578251825591602001919060010190611335565b5061135c9291506113d4565b5090565b6040518061064001604052806032906020820280368337509192915050565b828054828255906000526020600020908101928215611350579160200282015b8281111561135057825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061139f565b5b8082111561135c57600081556001016113d5565b6000602082840312156113fb57600080fd5b5035919050565b600081518084526020808501945080840160005b8381101561143b5781516001600160a01b031687529582019590820190600101611416565b509495945050505050565b600081518084526020808501945080840160005b8381101561143b5781518752958201959082019060010161145a565b86815285602082015284604082015260c06060820152600061149b60c0830186611402565b82810360808401526114ad8186611402565b905082810360a08401526114c18185611446565b9998505050505050505050565b6001600160a01b0381168114610b1a57600080fd5b6000806000606084860312156114f857600080fd5b8335611503816114ce565b92506020840135611513816114ce565b929592945050506040919091013590565b6020815260006115376020830184611446565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261156557600080fd5b8135602067ffffffffffffffff808311156115825761158261153e565b8260051b604051601f19603f830116810181811084821117156115a7576115a761153e565b6040529384528581018301938381019250878511156115c557600080fd5b83870191505b848210156115e4578135835291830191908301906115cb565b979650505050505050565b60006020828403121561160157600080fd5b813567ffffffffffffffff81111561161857600080fd5b61162484828501611554565b949350505050565b60006020828403121561163e57600080fd5b8135611537816114ce565b6000806040838503121561165c57600080fd5b823567ffffffffffffffff81111561167357600080fd5b61167f85828601611554565b95602094909401359450505050565b6000602082840312156116a057600080fd5b8151801515811461153757600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816116eb576116eb6116c6565b506000190190565b600060018201611705576117056116c6565b5060010190565b8082018082111561171f5761171f6116c6565b92915050565b808202811582820484141761171f5761171f6116c6565b60006020828403121561174e57600080fd5b5051919050565b60006020828403121561176757600080fd5b8151611537816114ce565b84815260806020820152600061178b6080830186611402565b6001600160a01b03949094166040830152506060015292915050565b634e487b7160e01b600052601260045260246000fd5b6000826117cc576117cc6117a7565b500690565b6000826117e0576117e06117a7565b50049056fea26469706673582212208b859f1c2249b0510dccd696f6cc7ee9d155689f9e0fdee2888602ba490513e764736f6c63430008130033",
  "deployedBytecode": "0x60806040526004361061012e5760003560e01c80638a185495116100ab578063d0fbe7fe1161006f578063d0fbe7fe1461031f578063db2e21bc14610332578063e580f47b14610347578063eb09fe751461035d578063eccb3a4f1461037d578063f2fde38b1461039d57600080fd5b80638a185495146102775780638da5cb5b1461028d5780638dfb9b4f146102bf57806392e845f6146102df578063cc4b834c146102ff57600080fd5b80635c975abb116100f25780635c975abb146101e15780636a6f44da1461020b578063715018a61461022d5780637aa4e29b146102425780638456cb591461026257600080fd5b80630ac38d8d1461013a5780631209b1f61461016d578063127f9fb1146101835780631a55acdf146101aa5780633f4ba83a146101cc57600080fd5b3661013557005b600080fd5b34801561014657600080fd5b5061015a6101553660046113e9565b6103bd565b6040519081526020015b60405180910390f35b34801561017957600080fd5b5061015a60035481565b34801561018f57600080fd5b506101986103de565b60405161016496959493929190611476565b3480156101b657600080fd5b506101ca6101c53660046114e3565b610406565b005b3480156101d857600080fd5b506101ca61048f565b3480156101ed57600080fd5b50600054600160a01b900460ff166040519015158152602001610164565b34801561021757600080fd5b506102206104a1565b6040516101649190611524565b34801561023957600080fd5b506101ca6104f9565b34801561024e57600080fd5b506101ca61025d3660046115ef565b61050b565b34801561026e57600080fd5b506101ca6105f9565b34801561028357600080fd5b5061015a60025481565b34801561029957600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610164565b3480156102cb57600080fd5b506101ca6102da36600461162c565b610609565b3480156102eb57600080fd5b506101986102fa3660046113e9565b610633565b34801561030b57600080fd5b506101ca61031a366004611649565b610772565b6101ca61032d3660046115ef565b61083f565b34801561033e57600080fd5b506101ca610a39565b34801561035357600080fd5b5061015a60015481565b34801561036957600080fd5b506005546102a7906001600160a01b031681565b34801561038957600080fd5b5061015a6103983660046113e9565b610a94565b3480156103a957600080fd5b506101ca6103b836600461162c565b610aa4565b600781815481106103cd57600080fd5b600091825260209091200154905081565b600080600060608060606103f3600154610633565b949b939a50919850965094509092509050565b61040e610b1d565b610416610b77565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af1158015610465573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610489919061168e565b50505050565b610497610b1d565b61049f610bc7565b565b606060078054806020026020016040519081016040528092919081815260200182805480156104ef57602002820191906000526020600020905b8154815260200190600101908083116104db575b5050505050905090565b610501610b1d565b61049f6000610c1c565b610513610c6c565b6001546000908152600860205260408120905b82518110156105f4576000838281518110610543576105436116b0565b60200260200101519050336001600160a01b031683600501828154811061056c5761056c6116b0565b6000918252602090912001546001600160a01b03161461058b57600080fd5b60008360050182815481106105a2576105a26116b0565b6000918252602082200180546001600160a01b0319166001600160a01b039390931692909217909155600284018054916105db836116dc565b91905055505080806105ec906116f3565b915050610526565b505050565b610601610b1d565b61049f610cb9565b610611610b1d565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60008181526008602090815260409182902080546001820154600383018054865181870281018701909752808752879693959294606094859485949293919291908301828280156106a357602002820191906000526020600020905b81548152602001906001019080831161068f575b505050505091508060050180548060200260200160405190810160405280929190818152602001828054801561070257602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106e4575b505050505093508060040180548060200260200160405190810160405280929190818152602001828054801561076157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610743575b505050505092505091939550919395565b61077a610b1d565b60648260028151811061078f5761078f6116b0565b6020026020010151836001815181106107aa576107aa6116b0565b6020026020010151846000815181106107c5576107c56116b0565b60200260200101516107d7919061170c565b6107e1919061170c565b106108255760405162461bcd60e51b815260206004820152600f60248201526e496e6176616c6964207072697a657360881b60448201526064015b60405180910390fd5b8151610838906004906020850190611315565b5060035550565b610847610c6c565b600081511161088a5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964207469636b65747360881b604482015260640161081c565b80516003546108999190611725565b3410156108d95760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b604482015260640161081c565b6001546000908152600860205260408120905b82518110156109e6576000838281518110610909576109096116b0565b6020026020010151905060006001600160a01b0316836005018281548110610933576109336116b0565b6000918252602090912001546001600160a01b03161461097e5760405162461bcd60e51b815260206004820152600660248201526519985a5b195960d21b604482015260640161081c565b33836005018281548110610994576109946116b0565b6000918252602082200180546001600160a01b0319166001600160a01b039390931692909217909155600284018054916109cd836116f3565b91905055505080806109de906116f3565b9150506108ec565b5081516109fa906007906020850190611315565b50600254816002015403610a35576000600354600254610a1a9190611725565b9050610a2581610cfc565b610a2d610efa565b6105f46111ce565b5050565b610a41610b1d565b610a49610b77565b47610a5c6000546001600160a01b031690565b6001600160a01b03166108fc829081150290604051600060405180830381858888f19350505050158015610a35573d6000803e3d6000fd5b600481815481106103cd57600080fd5b610aac610b1d565b6001600160a01b038116610b115760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161081c565b610b1a81610c1c565b50565b6000546001600160a01b0316331461049f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161081c565b600054600160a01b900460ff1661049f5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161081c565b610bcf610b77565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff161561049f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161081c565b610cc1610c6c565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610bff3390565b6005546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa158015610d44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d68919061173c565b1015610dac5760405162461bcd60e51b8152602060048201526013602482015272125b9d985b1a59081cddd85c08185b5bdd5b9d606a1b604482015260640161081c565b6040805160028082526060820183526000926020830190803683375050600654604080516315ab88c960e31b815290519394506001600160a01b039091169263ad5c4648925060048083019260209291908290030181865afa158015610e16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3a9190611755565b81600081518110610e4d57610e4d6116b0565b6001600160a01b039283166020918202929092010152600554825191169082906001908110610e7e57610e7e6116b0565b6001600160a01b03928316602091820292909201015260065460405163b6f9de9560e01b815291169063b6f9de95908490610ec490600090869030904290600401611772565b6000604051808303818588803b158015610edd57600080fd5b505af1158015610ef1573d6000803e3d6000fd5b50505050505050565b6000610f04611360565b6001546000908152600860205260408120600254909190610f2590426117bd565b4260018401556005546040516370a0823160e01b815230600482015291925060009182916001600160a01b0316906370a0823190602401602060405180830381865afa158015610f79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9d919061173c565b905060005b6003831015610ef15760025460408051426020820152908101869052606081018390526080016040516020818303038152906040528051906020012060001c610feb91906117bd565b9350858460328110610fff57610fff6116b0565b602002015115156000036111bc57846005018481548110611022576110226116b0565b6000918252602090912001546004860180546001600160a01b039092169185908110611050576110506116b0565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555083856003018481548110611094576110946116b0565b60009182526020909120015560018685603281106110b4576110b46116b0565b911515602090920201526005546004860180546001600160a01b039092169163a9059cbb9190869081106110ea576110ea6116b0565b9060005260206000200160009054906101000a90046001600160a01b031660646004878154811061111d5761111d6116b0565b9060005260206000200154866111339190611725565b61113d91906117d1565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015611188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ac919061168e565b9650826111b8816116f3565b9350505b806111c6816116f3565b915050610fa2565b6112076040518060c001604052806000815260200160008152602001600081526020016060815260200160608152602001606081525090565b428152604080516032808252610660820190925290602082016106408036833750505060a08201526040805160038082526080820190925290602082016060803683375050506080828101919091526040805160038082529281019091529060208201606080368337505050606082015260018054906000611288836116f3565b91905055508060086000600154815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030190805190602001906112dd929190611315565b50608082015180516112f991600484019160209091019061137f565b5060a0820151805161048991600584019160209091019061137f565b828054828255906000526020600020908101928215611350579160200282015b82811115611350578251825591602001919060010190611335565b5061135c9291506113d4565b5090565b6040518061064001604052806032906020820280368337509192915050565b828054828255906000526020600020908101928215611350579160200282015b8281111561135057825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061139f565b5b8082111561135c57600081556001016113d5565b6000602082840312156113fb57600080fd5b5035919050565b600081518084526020808501945080840160005b8381101561143b5781516001600160a01b031687529582019590820190600101611416565b509495945050505050565b600081518084526020808501945080840160005b8381101561143b5781518752958201959082019060010161145a565b86815285602082015284604082015260c06060820152600061149b60c0830186611402565b82810360808401526114ad8186611402565b905082810360a08401526114c18185611446565b9998505050505050505050565b6001600160a01b0381168114610b1a57600080fd5b6000806000606084860312156114f857600080fd5b8335611503816114ce565b92506020840135611513816114ce565b929592945050506040919091013590565b6020815260006115376020830184611446565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261156557600080fd5b8135602067ffffffffffffffff808311156115825761158261153e565b8260051b604051601f19603f830116810181811084821117156115a7576115a761153e565b6040529384528581018301938381019250878511156115c557600080fd5b83870191505b848210156115e4578135835291830191908301906115cb565b979650505050505050565b60006020828403121561160157600080fd5b813567ffffffffffffffff81111561161857600080fd5b61162484828501611554565b949350505050565b60006020828403121561163e57600080fd5b8135611537816114ce565b6000806040838503121561165c57600080fd5b823567ffffffffffffffff81111561167357600080fd5b61167f85828601611554565b95602094909401359450505050565b6000602082840312156116a057600080fd5b8151801515811461153757600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816116eb576116eb6116c6565b506000190190565b600060018201611705576117056116c6565b5060010190565b8082018082111561171f5761171f6116c6565b92915050565b808202811582820484141761171f5761171f6116c6565b60006020828403121561174e57600080fd5b5051919050565b60006020828403121561176757600080fd5b8151611537816114ce565b84815260806020820152600061178b6080830186611402565b6001600160a01b03949094166040830152506060015292915050565b634e487b7160e01b600052601260045260246000fd5b6000826117cc576117cc6117a7565b500690565b6000826117e0576117e06117a7565b50049056fea26469706673582212208b859f1c2249b0510dccd696f6cc7ee9d155689f9e0fdee2888602ba490513e764736f6c63430008130033",
  "linkReferences": {},
  "deployedLinkReferences": {}
} as const;