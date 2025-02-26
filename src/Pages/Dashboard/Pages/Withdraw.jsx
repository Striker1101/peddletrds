import React, { useEffect, useState } from "react";
import { apiGet } from "../../../Utils/service";
import { Link } from "react-router-dom";
import WithdrawType from "../Components/WithdrawType";

export default function Withdraw() {
  const [type, setType] = useState([]);

  useEffect(() => {
    apiGet("/withdraw_type").then((res) => {
      setType(res.data);
    });
  }, []);

  console.log(type);
  return (
    <div style={{ marginTop: "5px" }}>
      <Link
        to={"/dashboard?page=withdraw_transaction"}
        style={{ margin: "3px", position: "relative" }}
      >
        {" "}
        Transaction{" "}
      </Link>
      {type.map((item, i) => {
        return <WithdrawType withdraw={item} key={i} />;
      })}
    </div>
  );
}
