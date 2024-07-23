import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quotes",
  description: "Add your first open-source quote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "white"}} className={inter.className}>{children}</body>
    </html>
  );
}
