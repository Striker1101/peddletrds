import React, { useEffect, useRef } from "react";

export default function Analysis() {
  const containerRef = useRef(null);

  useEffect(() => {
    const widgetContainer = containerRef.current;

    if (widgetContainer) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.innerHTML = JSON.stringify({
        interval: "1m",
        width: "100%", // Make it responsive
        height: 450,
        symbol: "NASDAQ:AAPL",
        showIntervalTabs: true,
        displayMode: "single",
        locale: "en",
        colorTheme: "dark",
        isTransparent: false,
      });

      widgetContainer.appendChild(script);

      return () => {
        widgetContainer.innerHTML = ""; // Cleanup on unmount
      };
    }
  }, []);

  return (
    <div className="w-full p-4">
      <div
        ref={containerRef}
        className="tradingview-widget-container w-full"
        style={{ minHeight: "450px" }}
      >
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright text-center">
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
    </div>
  );
}
