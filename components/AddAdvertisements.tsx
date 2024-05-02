"use client"
import React, { useEffect } from 'react';

const AdComponent = () => {

  // useEffect(() => {
  //   try {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-5905842999139001"
         data-ad-slot="7996162986"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default AdComponent;
