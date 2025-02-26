import React from "react";
import InfoCard from "../Components/InfoCard";
import profit_image from "../../../Assets/Images/financial-profit.png";
import balance_image from "../../../Assets/Images/profit.png";
import referral_image from "../../../Assets/Images/referral.png";
import bonus_image from "../../../Assets/Images/bonus.png";
import RevenueChart from "../Components/Widget/RevenueChart";
import OnGoingTrade from "../Components/OnGoingTrade";
import CryptoMarket from "../Components/Widget/CryptoMarket";
import { Container } from "@mui/material";
import Analysis from "../Components/Widget/Analysis";
import CoinHeatMap from "../Components/Widget/CoinHeatMap";
import TradingViewMarketOverview from "../Components/Widget/TradingViewMarketOverview";
import { getUser } from "../../../Utils/transform";
import ChooseTrader from "../Components/ChooseTrader";

export default function DashboardHome() {
  const user = getUser();
  return (
    <Container style={{ overflowX: "hidden", width: "fit-content" }}>
      <div className="row g-3 mt-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
          <InfoCard
            card_name={"Balance"}
            amount={user?.account?.balance}
            color={"green"}
            image={balance_image}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
          <InfoCard
            card_name={"Profit"}
            amount={user?.account?.earning}
            color={"yellow"}
            image={profit_image}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
          <InfoCard
            card_name={"Referral"}
            amount={"0.00"}
            color={"blue"}
            image={referral_image}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
          <InfoCard
            card_name={"Bonus"}
            amount={user?.account?.bonus}
            color={"red"}
            image={bonus_image}
          />
        </div>
      </div>
      <div className="mt-3 " style={{ width: "100%" }}>
        <OnGoingTrade />
      </div>
      <div className="mt-3 " style={{ width: "100%" }}>
        <ChooseTrader />
      </div>
      <div className="mt-3">
        <RevenueChart />
      </div>
      <div className="mt-3">
        <CryptoMarket />
      </div>

      <div className="row mt-3">
        <Analysis />

        <TradingViewMarketOverview className="col-6" />
      </div>
    </Container>
  );
}
