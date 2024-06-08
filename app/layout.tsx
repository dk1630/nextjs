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
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ONLINE GAMER XONES 2",
    "description": "ONLINE GAMER XONES 2 , This is an article that demonstrates structured data.",
    "image": "https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp",
    "datePublished": "2020-02-11T06:42:03.706Z",
    "author": {
      "@type": "Person",
      "name": "John Reilly",
      "url": "https://nextjs-seven-rosy-32.vercel.app/"
    }
  }
  return (
    <html lang="en">
      <Head>
        <title>TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY</title>
        <meta name="description" content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!" />
        <meta name="title" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY" />
        <meta name="keywords" content={` FSSS, OnlineZones, Game, Demo, 12,`} />
        <meta property="og:title" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY" />
        <meta property="og:description" content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!" />
        <meta property="og:url" content={`https://nextjs-seven-rosy-32.vercel.app/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp" />
        <link rel="canonical" href={`https://nextjs-seven-rosy-32.vercel.app/`} />
       <meta name="google-site-verification" content="Fsk2xaeXXp_K1UQNwk1RObnbvrq9HOxCpcm2uSzbx5U" />
        
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001"
     crossOrigin="anonymous"></script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      </Head>
        
      {/* <meta name="google-adsense-account" content="ca-pub-5905842999139001" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
