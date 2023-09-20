import Navbar from "@/component/navbar/Navbar";
import "./globals.css";
import Footer from "@/component/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { NanumSquare, NanumGothic } from "./fonts";

export const metadata = {
  title: "Ryoon.with.wisdomtree",
  description: "Ryoon's log",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={NanumGothic.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
