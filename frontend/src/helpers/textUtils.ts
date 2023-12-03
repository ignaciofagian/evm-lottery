export const shortenAccount = (account: `0x${string}` | undefined, firstTakeLength = 6, secondTakeLength = 4) => {
	const firstChunk = account?.substring(0, firstTakeLength);
	const secondChunk = account?.substring(account?.length - secondTakeLength);

	return `${firstChunk}...${secondChunk}`;
};
