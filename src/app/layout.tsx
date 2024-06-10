import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Alyvazen | Muhammad Salman Al Farizi",
  description: "A backend developer who just started his career journey from 2020. Currently, he intern on Hyperdata Solusindo Mandiri Tangerang City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " px-36"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
