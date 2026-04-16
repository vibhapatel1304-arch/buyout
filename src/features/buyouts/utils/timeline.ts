export function getUrgency(days: number) {
  if (days < 0) return "overdue";
  if (days === 0) return "today";
  if (days <= 3) return "critical";
  if (days <= 7) return "warning";
  if (days <= 21) return "upcoming";
  return "normal";
}
