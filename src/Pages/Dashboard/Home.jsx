import React from "react";
import { useLocation } from "react-router-dom";

export default function DashboardHome() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const page = queryParams.get("page"); // "index"
  const id = queryParams.get("id"); // "2342"

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Page: {page}</p>
      <p>ID: {id}</p>
    </div>
  );
}
