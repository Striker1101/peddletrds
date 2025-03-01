import React, { useEffect, useRef, memo } from "react";

function Analysis() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear previous widget
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Add a delay before appending the script
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "interval": "1m",
          "width": "100%",
          "height": 450,
          "symbol": "NASDAQ:AAPL",
          "showIntervalTabs": true,
          "displayMode": "single",
          "locale": "en",
          "colorTheme": "dark",
          "isTransparent": false
        }`;

      containerRef.current?.appendChild(script);
    }, 500); // Delay of 500ms

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ height: "450px", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "450px", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-600"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
}

export default memo(Analysis);
