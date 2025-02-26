import React from "react";

export default function TradingCard() {
  return (
    <div className="relative border border-blue-400 rounded-lg shadow-lg p-6 text-center">
      {/* Pro Ribbon */}
      <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-tr-lg">
        Pro
      </div>

      {/* Title */}
      <h2 className="text-gray-800 font-semibold text-lg">SCALP BOT</h2>

      {/* Price */}
      <div className="text-4xl font-bold text-gray-900 mt-2">
        $<span className="text-6xl">3,500</span>
        <span className="text-2xl text-gray-500">.00</span>
      </div>

      {/* Features */}
      <div className="mt-4 text-gray-700">
        <p className="font-bold">
          1 <span className="font-normal">Agent</span>
        </p>
        <p className="font-bold">
          10 <span className="font-normal">Item Support</span>
        </p>
      </div>

      {/* Button */}
      <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}
