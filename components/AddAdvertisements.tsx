"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const AdComponent = () => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    if (!isAdLoaded && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setIsAdLoaded(true); // Set to true after successfully loading the ad
      } catch (err) {
        console.log(err);
      }
    }
  }, [isAdLoaded]); 

  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001"
          crossOrigin="anonymous"></script>
      </Head>
      <ins className="adsbygoogle"
        style={{ display: "block", backgroundColor:"black" }}
        data-ad-client="ca-pub-5905842999139001"
        data-ad-slot="7996162986"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </>
  );
};

export default AdComponent;
