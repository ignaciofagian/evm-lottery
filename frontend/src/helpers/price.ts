export function estimateGas(ticketCount: number, isFinalStep: boolean) {
  if (isFinalStep) {
    return BigInt(900000 + ticketCount * 15000);
  }
  return BigInt(400000 + ticketCount * 15000);
}
