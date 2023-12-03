/* eslint-disable @typescript-eslint/no-unused-vars */
import { Skeleton, Grid } from '@chakra-ui/react';

export default function LotterySkeleton() {
	const cells =  Array(Number(import.meta.env.VITE_LOTTERY_MAX_TICKETS)).fill(0);

	return (
		<Grid
			gap={'15px'}
			gridAutoRows="minmax(48px, 1fr)"
			gridTemplateColumns={'repeat(auto-fit, minmax(48px, 2fr))'}
		>
			{cells.map((_value: number, idx: number) => (
				<Skeleton borderRadius="5px" key={`sk-cell-${idx}`} h="40px"  w="48px" />
			))}
		</Grid>
	);
}
