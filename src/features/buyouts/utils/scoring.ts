import { Bid, Package } from "@/types";

export const getUrgency = (days: number) => {
  if (days < 0) return "overdue";
  if (days === 0) return "critical";
  if (days <= 3) return "critical";
  if (days <= 7) return "warning";
  return "normal";
};

export const calculateBidScores = (bid: Bid, pkg: Package) => {
  let priceScore = 50;
  if (pkg.budget && bid.amount > 0) {
    const variance = (bid.amount - pkg.budget) / pkg.budget;
    priceScore = Math.max(0, Math.min(100, 100 - (variance * 500)));
    if (variance <= 0) priceScore = 100;
  }

  let timelineScore = 50;
  if (bid.timelineDays) {
    const expected = 14; 
    const diff = bid.timelineDays - expected;
    timelineScore = Math.max(0, Math.min(100, 100 - (diff * 5)));
    if (diff <= 0) timelineScore = 100;
  }

  let reliabilityScore = 50;
  if (bid.vendorDetails) {
    reliabilityScore = (bid.vendorDetails.rating / 5) * 100;
  }

  const scopeMod = bid.scopeComplete === "Complete" ? 1 : bid.scopeComplete === "Partial" ? 0.7 : 0.4;
  const levelingMod = bid.leveled ? 1 : 0.8;

  priceScore *= scopeMod * levelingMod;
  timelineScore *= scopeMod * levelingMod;
  reliabilityScore *= scopeMod * levelingMod;

  const totalScore = (priceScore * 0.5) + (timelineScore * 0.3) + (reliabilityScore * 0.2);

  return {
    priceScore: Math.round(priceScore),
    timelineScore: Math.round(timelineScore),
    reliabilityScore: Math.round(reliabilityScore),
    totalScore: Math.round(totalScore)
  };
};

export const getRecommendation = (bids: Bid[], pkg: Package) => {
  if (!bids || bids.length === 0) return null;

  return bids.reduce((best, current) => {
    const scores = calculateBidScores(current, pkg);
    if (!best || scores.totalScore > (best.scores?.totalScore || 0)) {
      return { bid: current, scores };
    }
    return best;
  }, null as { bid: Bid, scores: ReturnType<typeof calculateBidScores> } | null);
};
