import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import Pricing from "../../Components/Pricing";
export default function Home() {
  const { user, setUser } = useAuth();
  return (
    <>
      {/* Start -slider-area */}
      <div className="slider-area d-flex align-items-center" id="home">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="single-slider-box">
                <div className="slider-content">
                  <div className="slider-title">
                    <h1>Empower Your Trading Journey with Peddles Trades</h1>
                    <p>Where Trust Meets Opportunity.</p>
                  </div>
                </div>

                <div
                  className="flex flex-row"
                  style={{ display: "flex", flexDirection: "row", gap: "20px" }}
                >
                  <div className="about-button">
                    <Link to={"/auth/register"}>Open an Account</Link>
                  </div>

                  <div className="pricing-boody">
                    <div className="pricing-button">
                      <Link to={"/login"}>Sign In</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-sliders-box">
                <div className="slider-thumb">
                  <img src="assets/images/crypto-2.png" alt="" />
                  <div className="shaps_img rotateme">
                    <img src="assets/images/crypto.png" alt="" />
                  </div>
                  <div className="seps_img bounce-animate">
                    <img src="assets/images/crypto-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start brand-area */}
      <div className="brand-area">
        <div className="container">
          <div className="row top">
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
      {/* Start about-area */}
      <div className="about-area">
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
                    <h3>users</h3>
                  </div>
                  <div className="main-title">
                    <h1>Our best users all over the World Coverages</h1>
                  </div>
                  <div className="section-text">
                    <p>
                      Credibly streamline premium innovation and client-focused
                      the. Intrinsicly integrate end-to-end synergy whereas
                      low-risk highs sources phosfluorescently.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="about-tmb">
                      <img src="assets/images/about.png" alt="" />
                      <div className="about-titles">
                        <h4>Binance Smart Chain</h4>
                      </div>
                    </div>
                    <div className="about-tmb">
                      <img src="assets/images/about.png" alt="" />
                      <div className="about-titles">
                        <h4>Coin Entherium</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="about-tmb">
                      <img src="assets/images/about.png" alt="" />
                      <div className="about-titles">
                        <h4>Exchange Money</h4>
                      </div>
                    </div>
                    <div className="about-tmb">
                      <img src="assets/images/about.png" alt="" />
                      <div className="about-titles">
                        <h4>OKEX Block Chain</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-button">
                  <Link to={"/about"}>learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start feature-area */}
      <div className="feature-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sections-title">
                <div className="sub-title">
                  <h3>features</h3>
                </div>
                <div className="main-title">
                  <h1>We Take Care Quality</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-thumb">
                  <img src="assets/images/icons-img.png" alt="" />
                </div>
                <div className="feature-title">
                  <h3>Best Trading Platform</h3>
                  <p>
                    Cryptography, encryption process referred to as plaintexts
                    tailers are before best services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-thumb">
                  <img src="assets/images/icon-2.png" alt="" />
                </div>
                <div className="feature-title">
                  <h3>Comportable System</h3>
                  <p>
                    Cryptography, encryption process referred to as plaintexts
                    tailers are before best services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-thumb">
                  <img src="assets/images/ico-img.png" alt="" />
                </div>
                <div className="feature-title">
                  <h3>Trusted Security</h3>
                  <p>
                    Cryptography, encryption process referred to as plaintexts
                    tailers are before best services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start pricing-area */}
      <Pricing />
      {/* Start data-table-area */}
      <div className="data-table">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <div className="sub-title">
                  <h3>market</h3>
                </div>
                <div className="main-title">
                  <h1>Curent Market</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="row align-items-center data-box">
                <div className="col-lg-4 col-md-4">
                  <div className="data-box">
                    <div className="data-content">
                      <h2>Curency</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="change">
                    <div className="change-thumb">
                      <span>24H Change</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="amrcat-cap-content">
                    <p>Market Cap</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="tsupply-content">
                    <p>T Supply</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="valume-content">
                    <p>24H Volume</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="row align-items-center data-box-inner">
                <div className="col-lg-4 col-md-4">
                  <div className="data-box d-flex">
                    <div className="data-thumb">
                      <img src="assets/images/00.png" alt="" />
                    </div>
                    <div className="data-content">
                      <h2>Bitcoin</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="change">
                    <div className="change-thumb">
                      <img
                        className="images"
                        src="assets/images/Down.png"
                        alt=""
                      />
                      <span>5.43%</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="amrcat-cap-content">
                    <p>$93,967,200.89</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="tsupply-content">
                    <p>21M</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="valume-content">
                    <p>$46,967.30</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="row align-items-center data-box-inner">
                <div className="col-lg-4 col-md-4">
                  <div className="data-box d-flex">
                    <div className="data-thumb">
                      <img src="assets/images/icon7.png" alt="" />
                    </div>
                    <div className="data-content">
                      <h2>Etherium</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="change">
                    <div className="change-thumb">
                      <img
                        className="images"
                        src="assets/images/up.png"
                        alt=""
                      />
                      <span className="more">0.23%</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="amrcat-cap-content">
                    <p>$560,450.89</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="tsupply-content">
                    <p>0.5K</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="valume-content">
                    <p>$580.989</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="row align-items-center data-box-inner">
                <div className="col-lg-4 col-md-4">
                  <div className="data-box d-flex">
                    <div className="data-thumb">
                      <img src="assets/images/02.png" alt="" />
                    </div>
                    <div className="data-content">
                      <h2>Telher</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="change">
                    <div className="change-thumb">
                      <img
                        className="images"
                        src="assets/images/Down.png"
                        alt=""
                      />
                      <span>5.43%</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="amrcat-cap-content">
                    <p>$64,68900.23</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="tsupply-content">
                    <p>36M</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="valume-content">
                    <p>$46,967.30</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="row align-items-center data-box-inner">
                <div className="col-lg-4 col-md-4">
                  <div className="data-box d-flex">
                    <div className="data-thumb">
                      <img src="assets/images/03.png" alt="" />
                    </div>
                    <div className="data-content">
                      <h2>Bitcoin</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="change">
                    <div className="change-thumb">
                      <img
                        className="images"
                        src="assets/images/Down.png"
                        alt=""
                      />
                      <span>5.43%</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="amrcat-cap-content">
                    <p>$93,967,200.89</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="tsupply-content">
                    <p>33k</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="valume-content">
                    <p>$46,967.30</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="row align-items-center data-box-inner">
                <div className="col-lg-4 col-md-4">
                  <div className="data-box d-flex">
                    <div className="data-thumb">
                      <img src="assets/images/04.png" alt="" />
                    </div>
                    <div className="data-content">
                      <h2>Bitcoin</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="change">
                    <div className="change-thumb">
                      <img
                        className="images"
                        src="assets/images/up.png"
                        alt=""
                      />
                      <span className="more">3.67%</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="amrcat-cap-content">
                    <p>$93,967,200.89</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="tsupply-content">
                    <p>100k</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="valume-content">
                    <p>$46,967.30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start testimonial-area */}
      <div className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sections-title">
                <div className="sub-title">
                  <h3>testimonial</h3>
                </div>
                <div className="main-title">
                  <h1>From Our Clients</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel testi_list">
              <div className="col-lg-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-thumb">
                    <img src="assets/images/crypto-8.png" alt="" />
                    <div className="testi-title">
                      <h2>alex john</h2>
                      <h4>investor</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Peddles Trades has been instrumental in helping me
                      navigate the complexities of the crypto market. Their
                      personalized support and expert guidance have enabled me
                      to make informed investment decisions and achieve
                      impressive returns. I highly recommend their services to
                      anyone looking to venture into the world of digital
                      assets.
                    </p>
                  </div>
                  <div className="testimonial-icon">
                    <ul>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i> <span>(4.5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-thumb">
                    <img src="assets/images/crypto-9.png" alt="" />
                    <div className="testi-title">
                      <h2>Anna Asler</h2>
                      <h4>Investor</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      I've been investing with Peddles Trades for over two years
                      now, and I couldn't be happier with the results. Their
                      transparent approach, coupled with their innovative
                      trading tools, has allowed me to grow my portfolio
                      steadily. The monthly profit payouts are a great bonus and
                      provide a consistent source of income. I'm grateful to
                      have found such a reliable partner in my investment
                      journey.
                    </p>
                  </div>
                  <div className="testimonial-icon">
                    <ul>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i> <span>(5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-thumb">
                    <img src="assets/images/crypto-7.png" alt="" />
                    <div className="testi-title">
                      <h2>Freda Johnson</h2>
                      <h4>Student</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      As a busy professional, I needed a hands-off investment
                      solution that I could trust. Peddles Trades's managed
                      portfolio option has exceeded my expectations. Their team
                      of expert fund managers has consistently delivered solid
                      returns while effectively diversifying my investments. I
                      appreciate their commitment to security and
                      professionalism.
                    </p>
                  </div>
                  <div className="testimonial-icon">
                    <ul>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i> <span>(4.5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-thumb">
                    <img src="assets/images/crypto-8.png" alt="" />
                    <div className="testi-title">
                      <h2>Michael Thompson</h2>
                      <h4>investor</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Peddles Trades has truly been a game-changer for me. Their
                      VIP investor status has given me access to exclusive
                      opportunities that I wouldn't have had otherwise. The
                      personalized attention and support I've received have made
                      me feel valued as a client. I look forward to continuing
                      my investment journey with them.
                    </p>
                  </div>
                  <div className="testimonial-icon">
                    <ul>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i> <span>(4.5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-thumb">
                    <img src="assets/images/crypto-9.png" alt="" />
                    <div className="testi-title">
                      <h2>Emily Lee</h2>
                      <h4>Investor</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      I've been impressed with Peddles Trades's commitment to
                      transparency and integrity. Their regular performance
                      reports and updates keep me informed about the status of
                      my investments, giving me peace of mind. The option to
                      reinvest profits for compounded growth has helped me
                      accelerate my wealth-building goals. Thank you, Peddles
                      Trades, for your excellent service.
                    </p>
                  </div>
                  <div className="testimonial-icon">
                    <ul>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i> <span>(5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start call-do-action-area */}
      <div className="call-do-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-call-do-action-box">
                <div className="call-do-action-title">
                  <h1>Explore the Next Crypto Ready to Selling</h1>
                  <p>
                    Credibly streamline premium innovation and client-focused
                    the. Intrinsicly integrate end-to-end synergy whereas.
                  </p>
                </div>
                <div className="call-do-button">
                  <Link to={"/auth/register"}> Get Started Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-call-do-box">
                <div className="call-do-action-thumb">
                  <img src="assets/images/crypto-6.png" alt="" />
                  <div className="call-shap rotateme">
                    <img src="assets/images/crypto-4.png" alt="" />
                  </div>
                  <div className="call-do-shap bounce-animate">
                    <img src="assets/images/crypto-5.png" alt="" />
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
