import React from "react";
import { useLocation } from "react-router-dom";
import DashboardHome from "./Pages/Home";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import TradingBot from "./Pages/TradingBot";
import Profile from "./Pages/Profile";
import DepositTransaction from "./Pages/DepositTransaction";
import WithdrawTransaction from "./Pages/WithdrawTransaction";
export default function AdminRouter() {
  const location = useLocation();

  // Create an instance of URLSearchParams
  const params = new URLSearchParams(location.search);

  // Get reset_token and id from the query parameters
  const page = params.get("page");

  switch (page) {
    case "home":
      return <DashboardHome />;

    case "deposit":
      return <Deposit />;

    case "deposit_transaction":
      return <DepositTransaction />;

    case "withdraw":
      return <WithdrawTransaction />;

    case "withdraw_transaction":
      return <Withdraw />;

    case "trading_bot":
      return <TradingBot />;

    case "profile":
      return <Profile />;

    default:
      return <DashboardHome />;
  }
}
