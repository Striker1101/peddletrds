import React, { useMemo } from "react";
import { Button } from "react-bootstrap";
import { apiPost } from "../../../Utils/service";
import { getUser } from "../../../Utils/transform";
import { handleSuccess } from "../../../Components/ToastProvider";

export default function TradingCard({ trade }) {
  // Generate a random border color on each render
  const borderColor = useMemo(() => {
    const colors = ["red", "blue", "green", "purple", "orange", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  function getPlan(amount) {
    if (amount > 5000) return "premium";
    if (amount > 3000) return "gold";
    if (amount > 2000) return "silver";
    if (amount > 1000) return "bronze";
    return "beginner";
  }

  function handleInvest(trade) {
    if (!trade?.amount) {
      console.error("Invalid trade amount");
      return;
    }

    const plan = getPlan(trade.amount);

    apiPost("/invest", {
      user_id: getUser()?.id,
      amount: parseFloat(trade.amount) || 0,
      plan: plan,
      duration: trade.duration || 0,
    })
      .then((res) => {
        handleSuccess(res.message);
        console.log("Investment successful", res);
      })
      .catch((err) => {
        console.error("Investment failed", err);
      });
  }

  return (
    <div
      style={{
        width: "400px",
        border: `2px solid ${borderColor}`,
        transition: "transform 0.3s ease",
        padding: "5px",
      }}
      className="relative rounded-xl shadow-xl p-8 text-center max-w-sm mx-auto bg-white hover:scale-105"
    >
      {/* Pro Ribbon */}
      <div className="relative bg-green-600 text-success text-xs font-bold px-5 py-1 rounded-br-lg transform -translate-x-1 -translate-y-1 rotate-[-45deg] shadow-md">
        {trade.type}
      </div>

      {/* Title */}
      <h2 className="text-gray-900 font-bold text-2xl tracking-wide">
        {trade.name}
      </h2>

      {/* Price Section */}
      <div className="mt-4">
        <b>
          <span className="">$</span>
          <span style={{ fontSize: "4em", fontWeight: "500" }}>
            {trade.amount}
          </span>
        </b>
        <span className="text-2xl text-gray-500">.00</span>
      </div>

      {/* Features */}
      <div className="mt-5 text-gray-700 space-y-2">
        <p className="font-bold text-lg">
          <b>{trade.agent} </b>
          <span className="font-normal">Agent</span>
        </p>
        <p className="font-bold text-lg">
          <b className="mx-1"> {trade.support}</b>
          <span className="font-normal">Item Support</span>
        </p>
      </div>

      {/* Button */}
      <Button
        onClick={() => {
          handleInvest(trade);
        }}
        className="mt-6 bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl"
      >
        Get Started
      </Button>
    </div>
  );
}
