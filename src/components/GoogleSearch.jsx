import React, { useEffect } from "react";

const GoogleSearch = () => {
  useEffect(() => {
    // Dynamically load the Google CSE script
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=b2cbb380f030448be";
    script.async = true;
    document.body.appendChild(script);
     console.log(script);
    return () => {
      // Clean up script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gcse-search"></div>;
};

export default GoogleSearch;
