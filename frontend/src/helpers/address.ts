export const ZeroAddress = '0x0000000000000000000000000000000000000000';

export function sameAddress(address1: `0x${string}` | undefined, address2: `0x${string}` | undefined) {
	return address1?.toLowerCase() === address2?.toLowerCase();
}
