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
      <div class="about-area style-one">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="single-about-box">
                <div class="about-thumb bounce-animate">
                  <img src="assets/images/crypto-3.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="single-about-box">
                <div class="section-title">
                  <div class="sub-title">
                    <h3>about</h3>
                  </div>
                  <div class="main-title">
                    <h1>We built Peddles Trades to buy & sell shares.</h1>
                  </div>
                  <div class="section-text">
                    <p>
                      At Peddles Trades, we prioritize the safety and security
                      of your assets above all else. Through rigorous security
                      measures and cutting-edge technology, we ensure that your
                      funds are protected at all times.
                    </p>
                  </div>
                </div>
                <div class="about-tmb">
                  <i class="fas fa-check"></i>
                  <div class="about-titles">
                    <h4>Innovative Trading Tools</h4>
                  </div>
                </div>
                <div class="about-tmb">
                  <i class="fas fa-check"></i>
                  <div class="about-titles">
                    <h4>Personalized Support</h4>
                  </div>
                </div>
                <div class="about-tmb">
                  <i class="fas fa-check"></i>
                  <div class="about-titles">
                    <h4>Advanced Security Measures</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start brand-area */}
      <div class="brand-area upper">
        <div class="container">
          <div class="row">
            <div class="owl-carousel brand_list">
              <div class="col-lg-12">
                <div class="single-brand-box">
                  <div class="brand-thumb">
                    <img src="assets/images/brand.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-brand-box">
                  <div class="brand-thumb">
                    <img src="assets/images/brand-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-brand-box">
                  <div class="brand-thumb">
                    <img src="assets/images/brand-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-brand-box">
                  <div class="brand-thumb">
                    <img src="assets/images/brand-3.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-brand-box">
                  <div class="brand-thumb">
                    <img src="assets/images/brand-4.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-brand-box">
                  <div class="brand-thumb">
                    <img src="assets/images/brand-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-brand-box">
                  <div class="brand-thumb">
                    <img src="assets/images/brand-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start feature-area */}
      <div class="feature-area style-one">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sections-title">
                <div class="sub-title">
                  <h3>features</h3>
                </div>
                <div class="main-title">
                  <h1>Peddles Trades Best Features</h1>
                </div>
                <div class="section-text">
                  <p>
                    Cryptocurrencies are used primarily outside existing banking
                    and coin governmental institutions and are exchanged
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row bottom">
            <div class="col-lg-4 col-md-6">
              <div class="single-feature-box">
                <div class="feature-thumb">
                  <img src="assets/images/About_5.png" alt="" />
                </div>
                <div class="feature-title">
                  <h3>Early Bonus Cash</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-feature-box">
                <div class="feature-thumb">
                  <img src="assets/images/icon.png" alt="" />
                </div>
                <div class="feature-title">
                  <h3>Secure Payment</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-feature-box">
                <div class="feature-thumb">
                  <img src="assets/images/About_6.png" alt="" />
                </div>
                <div class="feature-title">
                  <h3>Universal Access</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start skill-area */}
      <div class="skills-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="single-about-box">
                <div class="section-title">
                  <div class="sub-title">
                    <h3>skills</h3>
                  </div>
                  <div class="main-title">
                    <h1>Peddles Trades Expertise</h1>
                  </div>
                  <div class="section-text">
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
            <div class="col-lg-6 col-md-6">
              <AnimatedProgressBars />
            </div>
          </div>
        </div>
      </div>
      {/* Start counter-area */}
      <div class="counter-area">
        <div class="container">
          <AnimatedCounters />
        </div>
      </div>
      {/* Start blog-area */}
      <div class="blog-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sections-title">
                <div class="sub-title">
                  <h3>blog</h3>
                </div>
                <div class="main-title">
                  <h1>Recent blog</h1>
                </div>
                <div class="section-text"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="owl-carousel blog_list">
              <div class="col-lg-12">
                <div class="blog-single-box">
                  <div class="blog-thumb">
                    <img src="assets/images/About_4.png" alt="" />
                    <div class="blog-content">
                      <div class="blog-left">
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
              <div class="col-lg-12">
                <div class="blog-single-box">
                  <div class="blog-thumb">
                    <img src="assets/images/About_2.png" alt="" />
                    <div class="blog-content">
                      <div class="blog-left">
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
              <div class="col-lg-12">
                <div class="blog-single-box">
                  <div class="blog-thumb">
                    <img src="assets/images/About_3.png" alt="" />
                    <div class="blog-content">
                      <div class="blog-left">
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
              <div class="col-lg-12">
                <div class="blog-single-box">
                  <div class="blog-thumb">
                    <img src="assets/images/About_2.png" alt="" />
                    <div class="blog-content">
                      <div class="blog-left">
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
