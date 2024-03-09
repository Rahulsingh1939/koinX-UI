
import React, { useEffect, useRef, memo } from 'react';

function SmChart({chrt}) {
  const container = useRef();

  useEffect(() => {
    // Check if the script has already been loaded
    if (container.current && !container.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
            "symbol": "${chrt}",
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "dateRange": "12M",
            "colorTheme": "light",
            "isTransparent": false,
            "autosize": true,
            "largeChartUrl": ""
        }`;
      container.current.appendChild(script);
    }
  }, [chrt]);

  return (
    <div
      className="flex flex-col px-5 pt-5 pb-10 text-sm leading-5 rounded-xl border-0 border-indigo-100 shadow-slate-900 border-solid min-w-96"
    >
      <div className="tradingview-widget-container max-h-[32rem]" ref={container} style={{ width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
    </div>
    </div>
  );
}


export default memo(SmChart);
