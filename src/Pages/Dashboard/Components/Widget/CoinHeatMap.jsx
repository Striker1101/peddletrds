import React, { useEffect, useRef } from "react";

export default function CoinHeatMap() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-heatmap-widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-[600px] sm:h-[800px] md:h-[100vh] p-4">
      <gecko-coin-heatmap-widget
        ref={widgetRef}
        locale="en"
        outlined="true"
        top="100"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      ></gecko-coin-heatmap-widget>
    </div>
  );
}
