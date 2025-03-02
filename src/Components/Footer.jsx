import React from "react";

export default function Footer() {
  return (
    <>
      {/* Start footer-area */}
      <div className="footer-area py-4">
        <div className="container">
          <div className="row tops text-center text-lg-start">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="single-footer-box">
                <div className="footer-logo mb-3">
                  <img
                    src="assets/images/logo.png"
                    alt="logo"
                    className="img-fluid"
                    style={{ maxWidth: "250px" }}
                  />
                </div>
                <div className="footer-icon">
                  <ul className="d-flex justify-content-center justify-content-lg-start gap-3">
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
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="single-footer-box">
                <h2 className="footer-title">Categories</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">What is ICO</a>
                  </li>
                  <li>
                    <a href="#">Tokens</a>
                  </li>
                  <li>
                    <a href="#">Road Map</a>
                  </li>
                  <li>
                    <a href="#">Advisor</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="single-footer-box">
                <h2 className="footer-title">Useful Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Terms of Services</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="single-footer-box">
                <h2 className="footer-title">Newsletter</h2>
                <p className="small">
                  Get a free 20% discount on your first order
                </p>
                <div className="form_box d-flex">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter E-mail"
                  />
                  <button className="btn btn-primary ms-2">
                    <i className="far fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom text-center text-md-start">
            <div className="col-md-6 mb-2">
              <h3 className="small">
                © 2025 cryptotraderslimited Trades. All Rights Reserved.
              </h3>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="scroll-area position-fixed bottom-3 end-3">
        <button className="btn btn-primary rounded-circle go-top">
          <i className="fa fa-angle-double-up"></i>
        </button>
      </div>
    </>
  );
}
