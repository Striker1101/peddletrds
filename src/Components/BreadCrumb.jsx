import React from "react";
import { Link } from "react-router-dom";
export default function BreadCrumb({ page_name, link_name }) {
  return (
    <div className="breadcumb-area d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breacumb-content">
              <div className="breadcumb-title">
                <h1>{page_name}</h1>
              </div>
              <div className="breadcumb-content-text">
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
