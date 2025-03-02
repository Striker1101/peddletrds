import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import Pricing from "../../Components/Pricing";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <BreadCrumb link_name={"Home"} page_name={"Services"} />

      {/* Start cryptotraderslimited Trades  feature Area */}
      <div className="feature-area style-four pt-100 pb-70 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="feature-single-box wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/Services_1.png" alt="" />
                  </div>
                  <div className="feature-title">
                    <h3>Global Accessibility Solutions</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="feature-single-box upper1 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/Services_2.png" alt="" />
                  </div>
                  <div className="feature-title">
                    <h3>Fortified Payment Security</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="feature-single-box upper2 wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/Services-1.png" alt="" />
                  </div>
                  <div className="feature-title">
                    <h3>Tailored Investment Solutions</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="feature-single-box upper2 wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/Services_1.png" alt="" />
                  </div>
                  <div className="feature-title">
                    <h3>NFT Development Services</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start call-do-actions-area */}
      <div className="call-do-actions-area pt-90 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="call-do-action-content">
                <div className="calls-do-actions-title">
                  <h1>Looking for Crypto Expert?</h1>
                </div>
                <div className="call-do-action-text"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="call-do-btn">
                <Link to={"/contact"}>Contact Us`</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start pricing-area */}
      <Pricing />
    </div>
  );
}
