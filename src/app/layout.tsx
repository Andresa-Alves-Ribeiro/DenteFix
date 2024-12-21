import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImportBsJS from "./components/importBsJS";

import { Poppins } from 'next/font/google';
import { Oswald } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '800'],
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
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
        <ImportBsJS />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
