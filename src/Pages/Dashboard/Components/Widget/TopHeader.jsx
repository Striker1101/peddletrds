import React, { useEffect, useRef } from "react";

const TradingViewTickerTape = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current || widgetRef.current.hasChildNodes()) return; // Prevent duplicate widgets

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { proName: "SP:SPX", description: "SPX" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ""; // Cleanup
      }
    };
  }, []);

  return <div className="tradingview-widget-container" ref={widgetRef}></div>;
};

export default TradingViewTickerTape;
