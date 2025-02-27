import React from "react";
import { Link } from "react-router-dom";
export default function Pricing() {
  return (
    <div className="pricing-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <div className="sub-title">
                <h3>pricing</h3>
              </div>
              <div className="main-title">
                <h1>Crypto Pricing Plan</h1>
              </div>
              <div className="section-text"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 pt-left pl-0 pr-0">
            <div className="pricing-single-box">
              {/* <!-- pricing top --> */}
              <div className="pricing-top-ber">
                <div className="pricing-head">
                  <div className="pricing-title">
                    <h3>STANDARD</h3>
                  </div>
                </div>
              </div>
              <div className="pricing-items">
                <div className="pricing-items-title">
                  <h3>Min. Investment: $500</h3>
                  <p></p>
                </div>
                <div className="pricing-items-center">
                  <span className="tk">5</span>
                  <span className="curencyp">%</span>

                  <span className="monthp"> / Hourly</span>
                </div>
              </div>
              <div className="pricing-boody">
                <div className="pricing-featur">
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Diversified portfolio
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      expert fund managers
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Option to reinvest profits
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Dedicated customer support
                    </li>
                    <li className="price-icon-text">
                      <span className="price-icon-text">
                        <i className="fi fi-rr-cross"></i>
                      </span>
                      Lifetime Gurenty
                    </li>
                  </ul>
                </div>
                <div className="pricing-button">
                  <Link to={"/login"}>Purchase Now</Link>
                </div>

                <div className="pricing-hide"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 pt-left pl-0 pr-0">
            <div className="pricing-single-box">
              {/* <!-- pricing top --> */}
              <div className="pricing-top-ber">
                <div className="pricing-head">
                  <div className="pricing-title">
                    <h3>SILVER</h3>
                  </div>
                </div>
              </div>
              <div className="pricing-items">
                <div className="pricing-items-title">
                  <h3>Min. Investment: $1,000</h3>
                  <p></p>
                </div>
                <div className="pricing-items-center">
                  <span className="tk">8</span>
                  <span className="curencyp">%</span>

                  <span className="monthp"> / Hourly</span>
                </div>
              </div>
              <div className="pricing-boody">
                <div className="pricing-featur">
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Diversified portfolio
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      regular performance reports
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Option to reinvest profits
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      compounded growth
                    </li>
                    <li className="price-icon-text">
                      <span className="price-icon-text">
                        <i className="fi fi-rr-cross"></i>
                      </span>
                      Lifetime Gurenty
                    </li>
                  </ul>
                </div>
                <div className="pricing-button">
                  <Link to={"/login"}>Purchase Now</Link>
                </div>
                <div className="pricing-hide"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 pt-left pl-0 pr-0">
            <div className="pricing-single-box">
              {/* <!-- pricing top --> */}
              <div className="pricing-top-ber">
                <div className="pricing-head">
                  <div className="pricing-title">
                    <h3>GOLD</h3>
                  </div>
                </div>
              </div>
              <div className="pricing-items">
                <div className="pricing-items-title">
                  <h3>Min. Investment: $5,000</h3>
                  <p></p>
                </div>
                <div className="pricing-items-center">
                  <span className="tk">10</span>
                  <span className="curencyp">%</span>

                  <span className="monthp"> / Hourly</span>
                </div>
              </div>
              <div className="pricing-boody">
                <div className="pricing-featur">
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Diversified portfolio
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Investment Solutions
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Option to reinvest profits
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Customized Investmentt
                    </li>
                    <li className="price-icon-text">
                      <span className="price-icon-text">
                        <i className="fi fi-rr-cross"></i>
                      </span>
                      Lifetime Gurenty
                    </li>
                  </ul>
                </div>
                <div className="pricing-button">
                  <Link to={"/login"}>Purchase Now</Link>
                </div>
                <div className="pricing-hide"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 pt-left pl-0 pr-0">
            <div className="pricing-single-box">
              {/* <!-- pricing top --> */}
              <div className="pricing-top-ber">
                <div className="pricing-head">
                  <div className="pricing-title">
                    <h3>PREMIUM</h3>
                  </div>
                </div>
              </div>
              <div className="pricing-items">
                <div className="pricing-items-title">
                  <h3>Min. Investment: $10,000</h3>
                  <p></p>
                </div>
                <div className="pricing-items-center">
                  <span className="tk">15</span>
                  <span className="curencyp">%</span>

                  <span className="monthp"> / Hourly</span>
                </div>
              </div>
              <div className="pricing-boody">
                <div className="pricing-featur">
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      All Standard benefits
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      VIP Investor Status
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Access to Pre-IPO
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      Investment Research
                    </li>
                    <li className="price-icon-text">
                      <span className="price-icon-text">
                        <i className="fi fi-rr-cross"></i>
                      </span>
                      Lifetime Gurenty
                    </li>
                  </ul>
                </div>
                <div className="pricing-button">
                  <Link to={"/login"}>Purchase Now</Link>
                </div>
                <div className="pricing-hide"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
