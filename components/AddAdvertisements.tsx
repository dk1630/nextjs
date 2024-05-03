// "use client"
// import React, { useEffect } from 'react';

// const AdComponent = () => {
//   useEffect(() => {
//     const pushAd = () => {
//       try {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       } catch (err) {
//         console.error('Error loading ad:', err);
//       }
//     };
//     const insElement: any = document.querySelector('.adsbygoogle');
//     if (!insElement.hasAttribute('data-adsbygoogle-status')) {
//       pushAd();
//     }
//   }, []);

//   return (
//     <>
//       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001"
//         crossOrigin="anonymous"></script>
//       <ins className="adsbygoogle"
//         style={{ display: "inline-block", width: "728px", height: "100px",backgroundColor:"gray" }}
//         data-ad-client="ca-pub-5905842999139001"
//         data-ad-slot="4412141194"></ins>
//     </>
//   );
// };

// export default AdComponent;


// components/AdComponent.tsx

"use client"
import { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    // Function to handle the loading of the adsbygoogle script
    const loadAdsScript = () => {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      // Initialize ads after the script is loaded
      script.onload = () => {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      };
    };

    // Load the script if it hasn't been loaded yet
    if (!(window as any).adsbygoogle) {
      loadAdsScript();
    } 
    // else {
    //   (window as any).adsbygoogle.push({});
    // }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "inline-block", width: "728px", height: "90px" }}
         data-ad-client="ca-pub-5905842999139001"
         data-ad-slot="4412141194">
    </ins>
  );
};

export default AdComponent;
