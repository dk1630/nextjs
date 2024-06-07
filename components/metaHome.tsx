import Head from 'next/head'
import React from 'react'

const MetaHome = () => {
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
        {/* <Head> */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D</title>
            <meta name="description" content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!" data-react-helmet="true" />
            <meta name="title" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D" data-react-helmet="true" />
            <meta name="keywords" content={` FSSS, OnlineZones, Game, Demo, 12,`} data-react-helmet="true" />
            <meta property="og:title" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D" data-react-helmet="true" />
            <meta property="og:description" content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!" data-react-helmet="true" />
            <meta property="og:type" content="website" data-react-helmet="true" />
            <meta property="og:site_name" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D" data-react-helmet="true" />
            <meta property="og:url" content="article" data-react-helmet="true" />
            <meta property="og:image" content="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp" data-react-helmet="true" />
            <meta name="twitter:card" content="summary" data-react-helmet="true" />
            <meta name="twitter:title" content="TESTSING DOMIN AND MY WEB IN GOOGLE NEXT SEVEN ROSY BY KUNAL D" data-react-helmet="true" />
            <meta
                name="twitter:image"
                content="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp"
                data-react-helmet="true"
            />
            <link rel='icon' href='/app/favicon.ico' />
            <meta
                name="twitter:description"
                content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!"
                data-react-helmet="true"
            />
            <meta name="twitter:site" content="https://nextjs-seven-rosy-32.vercel.app/" data-react-helmet="true" />
            <link rel="canonical" href={`https://nextjs-seven-rosy-32.vercel.app/`} data-react-helmet="true" />
            <meta name="google-site-verification" content="Fsk2xaeXXp_K1UQNwk1RObnbvrq9HOxCpcm2uSzbx5U" data-react-helmet="true" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
        {/* </Head> */}
        </>
    )
}

export default MetaHome
