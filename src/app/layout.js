import Navbar from "@/component/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/component/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ryoon.with.wisdomtree",
  description: "Ryoon's log",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
