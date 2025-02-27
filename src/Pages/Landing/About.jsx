import React from "react";
import { Link } from "react-router-dom";
import AnimatedProgressBars from "../../Components/ProgressBar";
import AnimatedCounters from "../../Components/AnimatedCounters";
import BreadCrumb from "../../Components/BreadCrumb";
export default function About() {
  return (
    <>
      {/* Start breadcumb-area */}

      <BreadCrumb link_name={"Home"} page_name={"About Us"} />
      {/* Start about-area */}
      <div className="about-area style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-about-box">
                <div className="about-thumb bounce-animate">
                  <img src="assets/images/crypto-3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-about-box">
                <div className="section-title">
                  <div className="sub-title">
                    <h3>about</h3>
                  </div>
                  <div className="main-title">
                    <h1>We built Peddles Trades to buy & sell shares.</h1>
                  </div>
                  <div className="section-text">
                    <p>
                      At Peddles Trades, we prioritize the safety and security
                      of your assets above all else. Through rigorous security
                      measures and cutting-edge technology, we ensure that your
                      funds are protected at all times.
                    </p>
                  </div>
                </div>
                <div className="about-tmb">
                  <i className="fas fa-check"></i>
                  <div className="about-titles">
                    <h4>Innovative Trading Tools</h4>
                  </div>
                </div>
                <div className="about-tmb">
                  <i className="fas fa-check"></i>
                  <div className="about-titles">
                    <h4>Personalized Support</h4>
                  </div>
                </div>
                <div className="about-tmb">
                  <i className="fas fa-check"></i>
                  <div className="about-titles">
                    <h4>Advanced Security Measures</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start brand-area */}
      <div className="brand-area upper">
        <div className="container">
          <div className="row">
            <div className="owl-carousel brand_list">
              <div className="col-lg-12">
                <div className="single-brand-box">
                  <div className="brand-thumb">
                    <img src="assets/images/brand.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-box">
                  <div className="brand-thumb">
                    <img src="assets/images/brand-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-box">
                  <div className="brand-thumb">
                    <img src="assets/images/brand-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-box">
                  <div className="brand-thumb">
                    <img src="assets/images/brand-3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-box">
                  <div className="brand-thumb">
                    <img src="assets/images/brand-4.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-box">
                  <div className="brand-thumb">
                    <img src="assets/images/brand-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-box">
                  <div className="brand-thumb">
                    <img src="assets/images/brand-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start feature-area */}
      <div className="feature-area style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sections-title">
                <div className="sub-title">
                  <h3>features</h3>
                </div>
                <div className="main-title">
                  <h1>Peddles Trades Best Features</h1>
                </div>
                <div className="section-text">
                  <p>
                    Cryptocurrencies are used primarily outside existing banking
                    and coin governmental institutions and are exchanged
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row bottom">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-thumb">
                  <img src="assets/images/About_5.png" alt="" />
                </div>
                <div className="feature-title">
                  <h3>Early Bonus Cash</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-thumb">
                  <img src="assets/images/icon.png" alt="" />
                </div>
                <div className="feature-title">
                  <h3>Secure Payment</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-thumb">
                  <img src="assets/images/About_6.png" alt="" />
                </div>
                <div className="feature-title">
                  <h3>Universal Access</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start skill-area */}
      <div className="skills-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-about-box">
                <div className="section-title">
                  <div className="sub-title">
                    <h3>skills</h3>
                  </div>
                  <div className="main-title">
                    <h1>Peddles Trades Expertise</h1>
                  </div>
                  <div className="section-text">
                    <p>
                      "At Peddles Trades, we're your trusted partner in the
                      crypto world. With transparency, security, and
                      personalized support, we're here to help you navigate and
                      succeed in the ever-changing crypto landscape. Our
                      priority is the safety of your assets, backed by rigorous
                      security measures and cutting-edge technology. Join us to
                      unlock the potential of digital assets and take control of
                      your financial future."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <AnimatedProgressBars />
            </div>
          </div>
        </div>
      </div>
      {/* Start counter-area */}
      <div className="counter-area">
        <div className="container">
          <AnimatedCounters />
        </div>
      </div>
      {/* Start blog-area */}
      <div className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sections-title">
                <div className="sub-title">
                  <h3>blog</h3>
                </div>
                <div className="main-title">
                  <h1>Recent blog</h1>
                </div>
                <div className="section-text"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel blog_list">
              <div className="col-lg-12">
                <div className="blog-single-box">
                  <div className="blog-thumb">
                    <img src="assets/images/About_4.png" alt="" />
                    <div className="blog-content">
                      <div className="blog-left">
                        <span>Mar 19, 2024</span>
                      </div>
                      <h2>
                        <a href="#">
                          Content strategy can help engage customers
                        </a>
                      </h2>
                      <p>
                        Collaboratively syndicate turnkey are Energistically
                        enable standards in the pontificate interman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="blog-single-box">
                  <div className="blog-thumb">
                    <img src="assets/images/About_2.png" alt="" />
                    <div className="blog-content">
                      <div className="blog-left">
                        <span>Mar 7, 2024</span>
                      </div>
                      <h2>
                        <a href="#">
                          Crypto Buy and Sell Coin with Trusted Agency.
                        </a>
                      </h2>
                      <p>
                        Collaboratively syndicate turnkey are Energistically
                        enable standards in the pontificate interman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="blog-single-box">
                  <div className="blog-thumb">
                    <img src="assets/images/About_3.png" alt="" />
                    <div className="blog-content">
                      <div className="blog-left">
                        <span>Jan 10, 2024</span>
                      </div>
                      <h2>
                        <a href="#">Spicey choose plush amazing</a>
                      </h2>
                      <p>
                        Collaboratively syndicate turnkey are Energistically
                        enable standards in the pontificate interman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="blog-single-box">
                  <div className="blog-thumb">
                    <img src="assets/images/About_2.png" alt="" />
                    <div className="blog-content">
                      <div className="blog-left">
                        <span>Dec 17, 2023</span>
                      </div>
                      <h2>
                        <a href="#">
                          Coin strategy can help you engage Audience
                        </a>
                      </h2>
                      <p>
                        Collaboratively syndicate turnkey are Energistically
                        enable standards in the pontificate interman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
