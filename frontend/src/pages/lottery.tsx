import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Lottery from '../components/Lottery';
import { FormattedMessage } from 'react-intl';
import { useEffect, useState } from 'react';
import { LotteryProvider } from '../contexts/LotteryContext';
import LotteryWinners from '../components/Lottery/LotteryWinners';

export default function LotteryPage() {
	const [view, setView] = useState<'lottery' | 'winners'>('lottery');

	useEffect(() => {}, []);

	const handleChangeView = (nextView: 'lottery' | 'winners') => () => setView(nextView);

	return (
		<LotteryProvider>
			<Box px={10}>
				<Heading mb={5} mt={5} as="h3" size={{ base: 'xs', lg: 'xl', md: 'lg', sm: 'md' }}>
					<Flex justifyContent="space-between" alignItems={'center'} wrap={'wrap'} gap={5}>
						<FormattedMessage id="lottery.heading" />
						{view === 'lottery' ? (
							<Button onClick={handleChangeView('winners')}>
								<FormattedMessage id="lottery.button.viewWinners" />
							</Button>
						) : (
							<Button onClick={handleChangeView('lottery')}>
								<FormattedMessage id="lottery.button.viewLottery" />
							</Button>
						)}
					</Flex>
				</Heading>

				{view === 'lottery' ? <Lottery /> : <LotteryWinners />}
			</Box>
		</LotteryProvider>
	);
}
