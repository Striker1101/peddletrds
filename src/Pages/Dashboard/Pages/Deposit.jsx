import React, { useEffect, useState } from "react";
import CryptoCard from "../Components/CryptoCard";
import { apiGet } from "../../../Utils/service";
import { Link } from "react-router-dom";

export default function Deposit() {
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    apiGet("/wallet").then((res) => {
      setWallet(res.data);
    });
  }, []);

  console.log(wallet);
  return (
    <div style={{ marginTop: "5px" }}>
      <Link
        to={"/dashboard?page=deposit_transaction"}
        style={{ margin: "3px", position: "relative" }}
      >
        {" "}
        Transaction{" "}
      </Link>
      {wallet.map((item, i) => {
        return <CryptoCard wallet={item} key={i} />;
      })}
    </div>
  );
}
