import React from "react";
import { useAuth } from "../Context/AuthContext";
import BreadCrumb from "../Components/BreadCrumb";
export default function NotFound() {
  const { user, setUser } = useAuth();
  return (
    <>
      {/* Start -slider-area */}
      <BreadCrumb link_name={"Home"} page_name={"Not Found "} />
    </>
  );
}
