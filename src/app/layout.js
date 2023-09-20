import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { SITE_CONFIG } from "../../site.config";
import { NanumMyeongjo } from "./fonts";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { Session } from "next-auth";
import { headers } from "next/headers";
export const metadata = {
  title: "Ryoon.with.wisdomtree",
  description: "Ryoon's log",
};

// async function getSession(cookie) {
//   const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
//     headers: {
//       Accept: "application/json",
//       cookie,
//     },
//   });

//   const session = await response.json();

//   return Object.keys(session).length > 0 ? session : null;
// }

export default async function RootLayout({ children }) {
  // const session = await getSession(headers().get("cookie") ?? "");
  return (
    // <ClerkProvider>

    <html lang={SITE_CONFIG.lang}>
      <head></head>
      <body className={NanumMyeongjo.className}>
        <AuthProvider>
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
        </AuthProvider>
      </body>
    </html>

    // </ClerkProvider>
  );
}
