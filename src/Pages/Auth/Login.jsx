import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumbAuth from "../../Components/BreadCrumbAuth";
import { apiPost } from "../../Utils/service";
import { handleSuccess } from "../../Components/ToastProvider";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    apiPost("/auth/login", formData)
      .then((response) => {
        setLoading(false);

        if (response.status === 200) {
          handleSuccess(response.data.message);
          localStorage.setItem(
            "token",
            response.data?.access_token?.original?.access_token
          );
          localStorage.setItem("user", JSON.stringify(response.data.user));

          if (response.data?.user?.is_token_verified) {
            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 1000); // Redirect on success
          } else {
            window.location.href = "/verify";
          }
        }
        console.log("User created:", response);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
  return (
    <div>
      {/* Start breadcumb-area */}
      <BreadCrumbAuth name={"login"} />
      {/* Start footer-area */}
      <div class="contact-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="single-contact-box">
                <div class="contact-thumb">
                  <img src="assets/images/contact.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="singles-contacts-box">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="sections-title">
                      <div class="footer-logo">
                        <img src="assets/images/logo.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  method="post"
                  style={{ marginTop: "2rem" }}
                >
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form_box">
                        <input
                          type="email"
                          name="email"
                          defaultValue={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="E-mail"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form_box">
                        <input
                          type="password"
                          defaultValue={formData.password}
                          onChange={handleChange}
                          name="password"
                          required
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                      <div class="form-button">
                        <button
                          disabled={loading}
                          style={{
                            backgroundColor: loading ? "black" : "purple",
                          }}
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="footer-title" style={{ marginTop: "1rem" }}>
                  <Link to={"/forget_password"}>
                    <span>Forgot Password?</span>
                  </Link>
                </div>
                <div class="footer-title" style={{ marginTop: "1rem" }}>
                  Don't have an account?{" "}
                  <Link to={"/register"}>
                    <span>Sign up</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start footer-area */}
      <div class="footer-area">
        <div class="container">
          <div class="row tops">
            <div class="col-lg-3 col-md-6">
              <div class="single-footer-box">
                <div class="footer-logo">
                  <img src="assets/images/logo.png" alt="" />
                </div>
                <div class="footer-content">
                  <div class="footer-title"></div>
                  <div class="footer-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-footer-box">
                <div class="footer-content">
                  <div class="footer-title">
                    <h2>Categories</h2>
                  </div>
                  <div class="footer-ico">
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
            <div class="col-lg-3 col-md-6">
              <div class="single-footer-box">
                <div class="footer-content">
                  <div class="footer-title">
                    <h2>Useful Links</h2>
                  </div>
                  <div class="footer-ico">
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
            <div class="col-lg-3 col-md-6">
              <div class="single-footer-box">
                <div class="footer-content">
                  <div class="footer-titles">
                    <h2>Newsletter</h2>
                    <p>
                      Get now free 20% discount for all products on your first
                      order
                    </p>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form_box style-two">
                        <input
                          type="text"
                          name="your email address"
                          placeholder="Enter E-mail"
                        />
                        <button type="submit">
                          <i class="far fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row footer-bottom">
            <div class="col-lg-6 col-md-6">
              <div class="copy-left-box">
                <div class="copy-left-title">
                  <h3>©2024 Peddles Trades all Rights Reserved. </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="copy-right-box">
                <div class="copy-right-title">
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
    </div>
  );
}
