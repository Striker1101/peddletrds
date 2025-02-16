import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumbAuth({ name }) {
  return (
    <div class="breadcumb-area style-two d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breacumb-content">
              <div class="breadcumb-title">
                <h1>{name}</h1>
              </div>
              <div class="breadcumb-content-text">
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
