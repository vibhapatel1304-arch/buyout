import { PACKAGES } from "@/data/db";
import PackageDetailClient from "./PackageDetailClient";

export function generateStaticParams() {
  return PACKAGES.map((pkg) => ({
    id: String(pkg.id),
  }));
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <PackageDetailClient params={resolvedParams} />;
}
