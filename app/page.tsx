import Head from "next/head";



export default function Home() {
  
  return (
    <>
     {/* <head> */}
        <title>Online Game Zones - Best Online Games Collection</title>
        <meta name="description" content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!" />
        <meta name="keywords" content={` online games, free games, action games, puzzle games, strategy games`} />
        <meta property="og:title" content="Online Game Zones - Best Online Games Collection" />
        <meta property="og:description" content="Discover the best online games at Online Game Zones. Play and enjoy a wide variety of games for all ages!" />
        <meta property="og:url" content={`https://nextjs-seven-rosy-32.vercel.app/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nextjs-seven-rosy-32.vercel.app/" />
        <link rel="canonical" href={`https://nextjs-seven-rosy-32.vercel.app/`} />
{/*         <meta name="google-site-verification" content="Fsk2xaeXXp_K1UQNwk1RObnbvrq9HOxCpcm2uSzbx5U" /> */}
      {/* </head> */}
      <div className="bg-black">
        <img src="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp" />
      </div>
      <h1 className="text-4xl font-extrabold">OnlineZones Game OG</h1>
    </>
  );
}
