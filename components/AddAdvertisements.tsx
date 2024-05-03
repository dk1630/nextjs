// "use client"
// import React, { useEffect } from 'react';

// const AdComponent = ({props}:any) => {
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
//       {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905842999139001"
//         crossOrigin="anonymous"></script>
//       <ins className="adsbygoogle"
//         style={{ display: "block", overflow: "hidden" }}
//         data-ad-client="ca-pub-5905842999139001"
//         data-adtest="on"
//         {...props}
//       ></ins> */}

      
      
//     </>
//   );
// };

// export default AdComponent;

"use client"
import React, { useEffect } from 'react';

const AdComponent: React.FC = () => {
  useEffect(() => {
    // Create the <script> tag
    const script = document.createElement('script');
    script.src = "//www.topcreativeformat.com/8ce1b057bc5324c8dd97458c0e951450/invoke.js";
    script.async = true;

    // Set up the ad options
    (window as any).atOptions = {
      'key': '8ce1b057bc5324c8dd97458c0e951450',
      'format': 'iframe',
      'height': 600,
      'width': 160,
      'params': {}
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default AdComponent;
