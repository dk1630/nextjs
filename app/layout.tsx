import { Inter } from "next/font/google";
import Head from 'next/head'; // Import the Head component
import "./globals.css";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001"
        crossOrigin="anonymous"></script>
      <meta name="google-adsense-account" content="ca-pub-5905842999139001" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
