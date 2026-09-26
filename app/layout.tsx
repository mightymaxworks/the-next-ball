import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Next Ball — Better Decisions, One Point at a Time.",
  description: "The Next Ball is a decision-making philosophy by Darren Ho: you cannot control every ball that comes your way, but you can decide what you do with the next one.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
