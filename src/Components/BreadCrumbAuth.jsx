import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumbAuth({ name }) {
  return (
    <div className="breadcumb-area style-two d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breacumb-content">
              <div className="breadcumb-title">
                <h1>{name}</h1>
              </div>
              <div className="breadcumb-content-text">
                <Link to={"/"}>
                  <span> home</span> {name.toLowerCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
