import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { AppProvider } from "@/context/AppContext";
import Footer from "@/components/Footer/Footer";

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
        <Navbar />
        <AppProvider>{children}</AppProvider>
        <Footer />
      </body>
    </html>
  );
}
