import React from "react";
import { Link } from "react-router-dom";
export default function Pricing() {
  return (
    <div class="pricing-area pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <div class="sub-title">
                <h3>pricing</h3>
              </div>
              <div class="main-title">
                <h1>Crypto Pricing Plan</h1>
              </div>
              <div class="section-text"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 pt-left pl-0 pr-0">
            <div class="pricing-single-box">
              {/* <!-- pricing top --> */}
              <div class="pricing-top-ber">
                <div class="pricing-head">
                  <div class="pricing-title">
                    <h3>STANDARD</h3>
                  </div>
                </div>
              </div>
              <div class="pricing-items">
                <div class="pricing-items-title">
                  <h3>Min. Investment: $500</h3>
                  <p></p>
                </div>
                <div class="pricing-items-center">
                  <span class="tk">5</span>
                  <span class="curencyp">%</span>

                  <span class="monthp"> / Hourly</span>
                </div>
              </div>
              <div class="pricing-boody">
                <div class="pricing-featur">
                  <ul>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Diversified portfolio
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      expert fund managers
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Option to reinvest profits
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Dedicated customer support
                    </li>
                    <li class="price-icon-text">
                      <span class="price-icon-text">
                        <i class="fi fi-rr-cross"></i>
                      </span>
                      Lifetime Gurenty
                    </li>
                  </ul>
                </div>
                <div class="pricing-button">
                  <Link to={"/login"}>Purchase Now</Link>
                </div>

                <div class="pricing-hide"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 pt-left pl-0 pr-0">
            <div class="pricing-single-box">
              {/* <!-- pricing top --> */}
              <div class="pricing-top-ber">
                <div class="pricing-head">
                  <div class="pricing-title">
                    <h3>SILVER</h3>
                  </div>
                </div>
              </div>
              <div class="pricing-items">
                <div class="pricing-items-title">
                  <h3>Min. Investment: $1,000</h3>
                  <p></p>
                </div>
                <div class="pricing-items-center">
                  <span class="tk">8</span>
                  <span class="curencyp">%</span>

                  <span class="monthp"> / Hourly</span>
                </div>
              </div>
              <div class="pricing-boody">
                <div class="pricing-featur">
                  <ul>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Diversified portfolio
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      regular performance reports
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Option to reinvest profits
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      compounded growth
                    </li>
                    <li class="price-icon-text">
                      <span class="price-icon-text">
                        <i class="fi fi-rr-cross"></i>
                      </span>
                      Lifetime Gurenty
                    </li>
                  </ul>
                </div>
                <div class="pricing-button">
                  <Link to={"/login"}>Purchase Now</Link>
                </div>
                <div class="pricing-hide"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 pt-left pl-0 pr-0">
            <div class="pricing-single-box">
              {/* <!-- pricing top --> */}
              <div class="pricing-top-ber">
                <div class="pricing-head">
                  <div class="pricing-title">
                    <h3>GOLD</h3>
                  </div>
                </div>
              </div>
              <div class="pricing-items">
                <div class="pricing-items-title">
                  <h3>Min. Investment: $5,000</h3>
                  <p></p>
                </div>
                <div class="pricing-items-center">
                  <span class="tk">10</span>
                  <span class="curencyp">%</span>

                  <span class="monthp"> / Hourly</span>
                </div>
              </div>
              <div class="pricing-boody">
                <div class="pricing-featur">
                  <ul>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Diversified portfolio
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Investment Solutions
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Option to reinvest profits
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Customized Investmentt
                    </li>
                    <li class="price-icon-text">
                      <span class="price-icon-text">
                        <i class="fi fi-rr-cross"></i>
                      </span>
                      Lifetime Gurenty
                    </li>
                  </ul>
                </div>
                <div class="pricing-button">
                  <Link to={"/login"}>Purchase Now</Link>
                </div>
                <div class="pricing-hide"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 pt-left pl-0 pr-0">
            <div class="pricing-single-box">
              {/* <!-- pricing top --> */}
              <div class="pricing-top-ber">
                <div class="pricing-head">
                  <div class="pricing-title">
                    <h3>PREMIUM</h3>
                  </div>
                </div>
              </div>
              <div class="pricing-items">
                <div class="pricing-items-title">
                  <h3>Min. Investment: $10,000</h3>
                  <p></p>
                </div>
                <div class="pricing-items-center">
                  <span class="tk">15</span>
                  <span class="curencyp">%</span>

                  <span class="monthp"> / Hourly</span>
                </div>
              </div>
              <div class="pricing-boody">
                <div class="pricing-featur">
                  <ul>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      All Standard benefits
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      VIP Investor Status
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Access to Pre-IPO
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check"></i>
                      </span>{" "}
                      Investment Research
                    </li>
                    <li class="price-icon-text">
                      <span class="price-icon-text">
                        <i class="fi fi-rr-cross"></i>
                      </span>
                      Lifetime Gurenty
                    </li>
                  </ul>
                </div>
                <div class="pricing-button">
                  <Link to={"/login"}>Purchase Now</Link>
                </div>
                <div class="pricing-hide"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
