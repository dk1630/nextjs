import { Inter } from "next/font/google";
import Head from 'next/head'; // Import the Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3264556574788844"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
