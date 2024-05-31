import Head from "next/head";
import type { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: 'TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D',
//   description: 'ONLINE GAMER XONES 2 , This is an article that demonstrates structured data.',
// }



export default function Home() {
 const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D",
    "description": "ONLINE GAMER XONES 2 , This is an article that demonstrates structured data.",
    "image": "https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp",
    "author": {
      "@type": "Person",
      "name": "DK ",
      "url": "https://nextjs-seven-rosy-32.vercel.app/"
    }
  }
   
  
  return (
    <>
     <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D</title>
        <meta name="description" content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!" />
        <meta name="title" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D" />
        <meta name="keywords" content={` FSSS, OnlineZones, Game, Demo, 12,`} />
        <meta property="og:title" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D" />
        <meta property="og:description" content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D" />
        <meta property="og:url" content="article" />
        <meta property="og:image" content="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp" />
       <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D" />
    <meta
      name="twitter:image"
      content="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp"
    />
    <meta
      name="twitter:description"
      content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!"
    />
    <meta name="twitter:site" content="https://nextjs-seven-rosy-32.vercel.app/" />
        <link rel="canonical" href={`https://nextjs-seven-rosy-32.vercel.app/`} />
        <meta name="google-site-verification" content="Fsk2xaeXXp_K1UQNwk1RObnbvrq9HOxCpcm2uSzbx5U" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      </head>
      <div className="bg-black flex">
        <img src="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp" />
        <img src="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp" />
      </div>
      <h1 className="text-4xl font-extrabold">TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D</h1>
    </>
  );
}
