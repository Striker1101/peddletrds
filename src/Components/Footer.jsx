import React from "react";

export default function Footer() {
  return (
    <>
      {/* Start footer-area */}
      <div className="footer-area">
        <div className="container">
          <div className="row tops">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-box">
                <div className="footer-logo">
                  <img src="assets/images/logo.png" alt="" />
                </div>
                <div className="footer-content">
                  <div className="footer-title"></div>
                  <div className="footer-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-box">
                <div className="footer-content">
                  <div className="footer-title">
                    <h2>Categories</h2>
                  </div>
                  <div className="footer-ico">
                    <ul>
                      <li>
                        <a href="#">
                          <span>What is ICO</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Tokens</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Road Map</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Advisor</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-box">
                <div className="footer-content">
                  <div className="footer-title">
                    <h2>Useful Links</h2>
                  </div>
                  <div className="footer-ico">
                    <ul>
                      <li>
                        <a href="#">
                          <span>Terms of Services</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>My Account</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Return Policy</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-box">
                <div className="footer-content">
                  <div className="footer-titles">
                    <h2>Newsletter</h2>
                    <p>
                      Get now free 20% discount for all products on your first
                      order
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form_box style-two">
                        <input
                          type="text"
                          name="youe email address"
                          placeholder="Enter E-mail"
                        />
                        <button type="submit">
                          <i className="far fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-lg-6 col-md-6">
              <div className="copy-left-box">
                <div className="copy-left-title">
                  <h3>© 2025 Peddles Trades all Rights Reserved.</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="copy-right-box">
                <div className="copy-right-title">
                  <ul>
                    <li>
                      <a href="#">
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Terms & Condition</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Search Popup Area */}
      <div className="search-popup">
        <button className="close-search style-two">
          <i className="fa fa-times"></i>
        </button>
        <button className="close-search">
          <i className="fas fa-arrow-up"></i>
        </button>
        <form method="post" action="#">
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              value=""
              placeholder="Search Here"
              required=""
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>

      {/* scroll state */}
      <div className="scroll-area">
        <div className="top-wrap">
          <div className="go-top-btn-wraper">
            <div className="go-top go-top-button">
              <i className="fa fa-angle-double-up" aria-hidden="true"></i>
              <i className="fa fa-angle-double-up" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
