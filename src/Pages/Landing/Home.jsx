import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import Pricing from "../../Components/Pricing";
export default function Home() {
  const { user, setUser } = useAuth();
  return (
    <>
      {/* Start -slider-area */}
      <div class="slider-area d-flex align-items-center" id="home">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="single-slider-box">
                <div class="slider-content">
                  <div class="slider-title">
                    <h1>Empower Your Trading Journey with Peddles Trades</h1>
                    <p>Where Trust Meets Opportunity.</p>
                  </div>
                </div>

                <div
                  class="flex flex-row"
                  style={{ display: "flex", flexDirection: "row", gap: "20px" }}
                >
                  <div class="about-button">
                    <Link to={"/auth/register"}>Open an Account</Link>
                  </div>

                  <div class="pricing-boody">
                    <div class="pricing-button">
                      <Link to={"/login"}>Sign In</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="single-sliders-box">
                <div class="slider-thumb">
                  <img src="assets/images/crypto-2.png" alt="" />
                  <div class="shaps_img rotateme">
                    <img src="assets/images/crypto.png" alt="" />
                  </div>
                  <div class="seps_img bounce-animate">
                    <img src="assets/images/crypto-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start brand-area */}
      <div class="brand-area">
        <div class="container">
          <div class="row top">
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
      {/* Start about-area */}
      <div class="about-area">
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
                    <h3>users</h3>
                  </div>
                  <div class="main-title">
                    <h1>Our best users all over the World Coverages</h1>
                  </div>
                  <div class="section-text">
                    <p>
                      Credibly streamline premium innovation and client-focused
                      the. Intrinsicly integrate end-to-end synergy whereas
                      low-risk highs sources phosfluorescently.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="about-tmb">
                      <img src="assets/images/about.png" alt="" />
                      <div class="about-titles">
                        <h4>Binance Smart Chain</h4>
                      </div>
                    </div>
                    <div class="about-tmb">
                      <img src="assets/images/about.png" alt="" />
                      <div class="about-titles">
                        <h4>Coin Entherium</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="about-tmb">
                      <img src="assets/images/about.png" alt="" />
                      <div class="about-titles">
                        <h4>Exchange Money</h4>
                      </div>
                    </div>
                    <div class="about-tmb">
                      <img src="assets/images/about.png" alt="" />
                      <div class="about-titles">
                        <h4>OKEX Block Chain</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="about-button">
                  <Link to={"/about"}>learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start feature-area */}
      <div class="feature-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sections-title">
                <div class="sub-title">
                  <h3>features</h3>
                </div>
                <div class="main-title">
                  <h1>We Take Care Quality</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-feature-box">
                <div class="feature-thumb">
                  <img src="assets/images/icons-img.png" alt="" />
                </div>
                <div class="feature-title">
                  <h3>Best Trading Platform</h3>
                  <p>
                    Cryptography, encryption process referred to as plaintexts
                    tailers are before best services.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-feature-box">
                <div class="feature-thumb">
                  <img src="assets/images/icon-2.png" alt="" />
                </div>
                <div class="feature-title">
                  <h3>Comportable System</h3>
                  <p>
                    Cryptography, encryption process referred to as plaintexts
                    tailers are before best services.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-feature-box">
                <div class="feature-thumb">
                  <img src="assets/images/ico-img.png" alt="" />
                </div>
                <div class="feature-title">
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
      <div class="data-table">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <div class="sub-title">
                  <h3>market</h3>
                </div>
                <div class="main-title">
                  <h1>Curent Market</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
              <div class="row align-items-center data-box">
                <div class="col-lg-4 col-md-4">
                  <div class="data-box">
                    <div class="data-content">
                      <h2>Curency</h2>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="change">
                    <div class="change-thumb">
                      <span>24H Change</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="amrcat-cap-content">
                    <p>Market Cap</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="tsupply-content">
                    <p>T Supply</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="valume-content">
                    <p>24H Volume</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="row align-items-center data-box-inner">
                <div class="col-lg-4 col-md-4">
                  <div class="data-box d-flex">
                    <div class="data-thumb">
                      <img src="assets/images/00.png" alt="" />
                    </div>
                    <div class="data-content">
                      <h2>Bitcoin</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="change">
                    <div class="change-thumb">
                      <img class="images" src="assets/images/Down.png" alt="" />
                      <span>5.43%</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="amrcat-cap-content">
                    <p>$93,967,200.89</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="tsupply-content">
                    <p>21M</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="valume-content">
                    <p>$46,967.30</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="row align-items-center data-box-inner">
                <div class="col-lg-4 col-md-4">
                  <div class="data-box d-flex">
                    <div class="data-thumb">
                      <img src="assets/images/icon7.png" alt="" />
                    </div>
                    <div class="data-content">
                      <h2>Etherium</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="change">
                    <div class="change-thumb">
                      <img class="images" src="assets/images/up.png" alt="" />
                      <span class="more">0.23%</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="amrcat-cap-content">
                    <p>$560,450.89</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="tsupply-content">
                    <p>0.5K</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="valume-content">
                    <p>$580.989</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="row align-items-center data-box-inner">
                <div class="col-lg-4 col-md-4">
                  <div class="data-box d-flex">
                    <div class="data-thumb">
                      <img src="assets/images/02.png" alt="" />
                    </div>
                    <div class="data-content">
                      <h2>Telher</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="change">
                    <div class="change-thumb">
                      <img class="images" src="assets/images/Down.png" alt="" />
                      <span>5.43%</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="amrcat-cap-content">
                    <p>$64,68900.23</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="tsupply-content">
                    <p>36M</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="valume-content">
                    <p>$46,967.30</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="row align-items-center data-box-inner">
                <div class="col-lg-4 col-md-4">
                  <div class="data-box d-flex">
                    <div class="data-thumb">
                      <img src="assets/images/03.png" alt="" />
                    </div>
                    <div class="data-content">
                      <h2>Bitcoin</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="change">
                    <div class="change-thumb">
                      <img class="images" src="assets/images/Down.png" alt="" />
                      <span>5.43%</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="amrcat-cap-content">
                    <p>$93,967,200.89</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="tsupply-content">
                    <p>33k</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="valume-content">
                    <p>$46,967.30</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="row align-items-center data-box-inner">
                <div class="col-lg-4 col-md-4">
                  <div class="data-box d-flex">
                    <div class="data-thumb">
                      <img src="assets/images/04.png" alt="" />
                    </div>
                    <div class="data-content">
                      <h2>Bitcoin</h2>
                      <p>PRICE =</p>
                      <span>0.6700 USD</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="change">
                    <div class="change-thumb">
                      <img class="images" src="assets/images/up.png" alt="" />
                      <span class="more">3.67%</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="amrcat-cap-content">
                    <p>$93,967,200.89</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="tsupply-content">
                    <p>100k</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="valume-content">
                    <p>$46,967.30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start testimonial-area */}
      <div class="testimonial-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sections-title">
                <div class="sub-title">
                  <h3>testimonial</h3>
                </div>
                <div class="main-title">
                  <h1>From Our Clients</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="owl-carousel testi_list">
              <div class="col-lg-12">
                <div class="single-testimonial-box">
                  <div class="testimonial-thumb">
                    <img src="assets/images/crypto-8.png" alt="" />
                    <div class="testi-title">
                      <h2>alex john</h2>
                      <h4>investor</h4>
                    </div>
                  </div>
                  <div class="testimonial-text">
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
                  <div class="testimonial-icon">
                    <ul>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i> <span>(4.5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-testimonial-box">
                  <div class="testimonial-thumb">
                    <img src="assets/images/crypto-9.png" alt="" />
                    <div class="testi-title">
                      <h2>Anna Asler</h2>
                      <h4>Investor</h4>
                    </div>
                  </div>
                  <div class="testimonial-text">
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
                  <div class="testimonial-icon">
                    <ul>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i> <span>(5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-testimonial-box">
                  <div class="testimonial-thumb">
                    <img src="assets/images/crypto-7.png" alt="" />
                    <div class="testi-title">
                      <h2>Freda Johnson</h2>
                      <h4>Student</h4>
                    </div>
                  </div>
                  <div class="testimonial-text">
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
                  <div class="testimonial-icon">
                    <ul>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i> <span>(4.5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-testimonial-box">
                  <div class="testimonial-thumb">
                    <img src="assets/images/crypto-8.png" alt="" />
                    <div class="testi-title">
                      <h2>Michael Thompson</h2>
                      <h4>investor</h4>
                    </div>
                  </div>
                  <div class="testimonial-text">
                    <p>
                      Peddles Trades has truly been a game-changer for me. Their
                      VIP investor status has given me access to exclusive
                      opportunities that I wouldn't have had otherwise. The
                      personalized attention and support I've received have made
                      me feel valued as a client. I look forward to continuing
                      my investment journey with them.
                    </p>
                  </div>
                  <div class="testimonial-icon">
                    <ul>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i> <span>(4.5)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single-testimonial-box">
                  <div class="testimonial-thumb">
                    <img src="assets/images/crypto-9.png" alt="" />
                    <div class="testi-title">
                      <h2>Emily Lee</h2>
                      <h4>Investor</h4>
                    </div>
                  </div>
                  <div class="testimonial-text">
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
                  <div class="testimonial-icon">
                    <ul>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                      </li>
                      <li>
                        <i class="fas fa-star"></i> <span>(5)</span>
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
      <div class="call-do-action-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="single-call-do-action-box">
                <div class="call-do-action-title">
                  <h1>Explore the Next Crypto Ready to Selling</h1>
                  <p>
                    Credibly streamline premium innovation and client-focused
                    the. Intrinsicly integrate end-to-end synergy whereas.
                  </p>
                </div>
                <div class="call-do-button">
                  <Link to={"/auth/register"}> Get Started Now</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="single-call-do-box">
                <div class="call-do-action-thumb">
                  <img src="assets/images/crypto-6.png" alt="" />
                  <div class="call-shap rotateme">
                    <img src="assets/images/crypto-4.png" alt="" />
                  </div>
                  <div class="call-do-shap bounce-animate">
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
