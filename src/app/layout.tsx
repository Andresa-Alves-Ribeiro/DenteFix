import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '800'],
});

export const metadata: Metadata = {
  title: "DenteFix",
  description: "Um dentista mais perto de você",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
