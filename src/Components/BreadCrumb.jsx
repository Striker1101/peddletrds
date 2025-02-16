import React from "react";
import { Link } from "react-router-dom";
export default function BreadCrumb({ page_name, link_name }) {
  return (
    <div class="breadcumb-area d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breacumb-content">
              <div class="breadcumb-title">
                <h1>{page_name}</h1>
              </div>
              <div class="breadcumb-content-text">
                <Link to={"/"}>
                  <span>{link_name}</span> {page_name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
