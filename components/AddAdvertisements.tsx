"use client"
import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('Error loading ad:', err);
      }
    };
    const insElement: any = document.querySelector('.adsbygoogle');
    if (!insElement.hasAttribute('data-adsbygoogle-status')) {
      pushAd();
    }
  }, []);

  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001"
        crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
        style={{ display: "inline-block", width: "728px", height: "100px",backgroundColor:"gray" }}
        data-ad-client="ca-pub-5905842999139001"
        data-ad-slot="4412141194"></ins>
    </>
  );
};

export default AdComponent;

