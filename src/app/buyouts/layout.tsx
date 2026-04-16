import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Package Detail — BuyOut Command Center",
};

export default function BuyoutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
