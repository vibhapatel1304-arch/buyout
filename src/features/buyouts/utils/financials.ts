import { Bid, Package } from "@/types";

export interface PackageFinancials {
  lowBid: number | null;
  variancePct: number | null;
  savings: number;
}

export function calculateFinancials(pkg: Package, bids: Bid[]): PackageFinancials {
  const validBids = bids.filter((bid) => bid.amount > 0);
  const lowBid = validBids.length
    ? validBids.reduce((lowest, bid) => Math.min(lowest, bid.amount), validBids[0].amount)
    : null;

  if (!pkg.budget || !lowBid) {
    return {
      lowBid,
      variancePct: null,
      savings: 0,
    };
  }

  const variancePct = ((lowBid - pkg.budget) / pkg.budget) * 100;
  const savings = lowBid < pkg.budget ? pkg.budget - lowBid : 0;

  return {
    lowBid,
    variancePct,
    savings,
  };
}
