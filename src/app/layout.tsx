import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { AppProvider } from "@/context/AppContext";
import Footer from "@/components/Footer/Footer";
import { BasketProvider } from "@/context/BasketContext";

export const metadata: Metadata = {
  title: "Shoenest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Navbar />
          <AppProvider>
            <BasketProvider>
              <main className="content">{children}</main>
            </BasketProvider>
          </AppProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
