import React, { useEffect, useState } from "react";
import TradingCard from "../Components/TradingCard";
import { apiGet } from "../../../Utils/service";

export default function TradingBot() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    apiGet("/plan").then((res) => {
      setPlans(res.data);
    });
  }, []);

  console.log(plans);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      {plans.map((item, index) => {
        return <TradingCard trade={item} key={index} />;
      })}
    </div>
  );
}
