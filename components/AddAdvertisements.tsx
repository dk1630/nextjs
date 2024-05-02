"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const AdComponent = () => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    if (!isAdLoaded && window.adsbygoogle && typeof window !== 'undefined') {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        setIsAdLoaded(true); // Prevent further ad loading attempts
      } catch (err) {
        console.error('Error loading ad:', err);
      }
    }
  }, [isAdLoaded]);

  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001"
     crossOrigin="anonymous"></script>
      {/* <ins className="adsbygoogle"
        style={{ display: "block", backgroundColor: "black" }}
        data-ad-client="ca-pub-5905842999139001"
        data-ad-slot="4412141194"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins> */}

      <ins className="adsbygoogle"
        style={{ display: "inline-block", width: "728px", height: "90px" }}
        data-ad-client="ca-pub-5905842999139001"
        data-ad-slot="4412141194"></ins>
    </>
  );
};

export default AdComponent;
