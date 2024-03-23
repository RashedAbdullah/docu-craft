import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWithSideBar from "./components/header/header";
import { getDocuments } from "@/lib/doc";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docu-craft",
  description: "A Educational Website",
};

export default function RootLayout({ children }) {
  getDocuments();
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderWithSideBar />
        {children}
      </body>
    </html>
  );
}
