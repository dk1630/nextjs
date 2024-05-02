"use client"
import Head from 'next/head';
import React, { useEffect } from 'react';

const AdComponent = () => {

  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001"
          crossOrigin="anonymous"></script>
      </Head>
      <ins className="adsbygoogle"
        style={{ display: "block",color:"black" }}
        data-ad-client="ca-pub-5905842999139001"
        data-ad-slot="7996162986"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </>
  );
};

export default AdComponent;
