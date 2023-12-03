/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Heading, IconButton, Badge, Img, HStack, Text, Stack } from '@chakra-ui/react';
import Winner1stIcon from './../../assets/winner-1st.svg';
import Winner2ndIcon from './../../assets/winner-2nd.svg';
import Winner3rdIcon from './../../assets/winner-3rd.svg';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { readContract } from 'wagmi/actions';
import lotteryAbi from './../../abi/lottery';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

interface LotteryChainWinner {
	slot: number;
	address: string;
}
interface LotteryChain {
	createdAt: Date;
	endedAt: Date | false;
	isEnded: boolean;
	winners: LotteryChainWinner[];
}

export default function LotteryWinners() {
	const [lastId, setLastId] = useState<number>(0);
	const [active, setActive] = useState<number>(1);
	const [lottery, setLottery] = useState<LotteryChain>(null!);

	useEffect(() => {
		readContract({
			address: import.meta.env.VITE_LOTTERY_ADDRESS,
			abi: lotteryAbi.abi,
			functionName: 'lotteryId',
		}).then((id: bigint) => {
			const currentId = Number(id);
			setActive(currentId > 1 ? currentId - 1 : currentId);
			setLastId(currentId);
		});
	}, []);

	useEffect(() => {
		readContract({
			address: import.meta.env.VITE_LOTTERY_ADDRESS,
			abi: lotteryAbi.abi,
			functionName: 'getLottery',
			args: [BigInt(active)],
		})
			.then(parseLotteryChain)
			.then((lotteryChain: LotteryChain) => setLottery(lotteryChain));
	}, [active]);

	const handlePrev = () => {
		setActive(active - 1);
	};

	const handleNext = () => {
		setActive(active + 1);
	};

	const hasNext = lastId > active;
	const hasPrev = active > 1;

	return (
		<Box>
			<Heading size="md" mb={4}>
				<Flex alignItems={'center'} gap={8}>
					<FormattedMessage id="lottery.winners.heading" /> #{active}
					<HStack>
						<IconButton
							size="md"
							icon={<ChevronLeftIcon />}
							aria-label="Prev"
							isDisabled={hasPrev === false}
							onClick={handlePrev}
						/>
						<IconButton
							size="md"
							icon={<ChevronRightIcon />}
							aria-label="Next"
							isDisabled={hasNext === false}
							onClick={handleNext}
						/>
					</HStack>
				</Flex>
			</Heading>
			<Text mb={5}>{lottery?.createdAt.toLocaleString()}</Text>
			{lottery?.isEnded && (
				<>
					<Text mb={6}>
						<FormattedMessage id="lottery.winners.list.heading" />
					</Text>
					<Stack>
						<HStack alignItems={'center'} spacing={5}>
							<Img src={Winner1stIcon} h={'85px'} />
							<Badge w="50px" mt={15} py={2} px={3} rounded={'md'} textAlign="center">
								<Text fontSize="18px">{lottery?.winners[0].slot}</Text>
							</Badge>
							<Text fontSize="18px" mt={15}>
								{lottery?.winners[0].address}
							</Text>
						</HStack>
						<HStack alignItems={'center'} spacing={5}>
							<Img src={Winner2ndIcon} h={'85px'} />
              <Badge w="50px" mt={15} py={2} px={3} rounded={'md'} textAlign="center">
								<Text fontSize="18px">{lottery?.winners[1].slot}</Text>
							</Badge>
							<Text fontSize="18px" mt={15}>
								{lottery?.winners[1].address}
							</Text>
						</HStack>
						<HStack alignItems={'center'} spacing={5}>
							<Img src={Winner3rdIcon} h={'85px'} />
							<Badge w="50px" mt={15} py={2} px={3} rounded={'md'} textAlign="center">
								<Text fontSize="18px">{lottery?.winners[2].slot}</Text>
							</Badge>
							<Text fontSize="18px" mt={15}>
								{lottery?.winners[2].address}
							</Text>
						</HStack>
					</Stack>
				</>
			)}
			{lottery?.isEnded === false && (
				<Stack>
					<Text color="gray">
						<FormattedMessage id="lottery.winners.list.empty" />
					</Text>
				</Stack>
			)}
		</Box>
	);
}

function parseLotteryChain(data: any): LotteryChain {
	const createdAt: Date = new Date(Number(data[1]) * 1000);
	const endedAt: Date | false = data[2] !== 0n ? new Date(Number(data[2]) * 1000) : false;
	const winnerAddresses: string[] = data[4];
	const winnerNumbers: number[] = data[5];
	const winners: LotteryChainWinner[] = [];
	winnerAddresses.forEach((address: string, idx: number) => {
		winners.push({
			address: address,
			slot: Number(winnerNumbers[idx]),
		});
	});
	
	return {
		createdAt,
		endedAt,
		isEnded: endedAt !== false,
		winners,
	};
}
