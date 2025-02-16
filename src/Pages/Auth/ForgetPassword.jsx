import React from "react";
import BreadCrumbAuth from "../../Components/BreadCrumbAuth";

export default function ForgetPassword() {
  return (
    <div>
      <BreadCrumbAuth name={"Forget Password"} />
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
                  action="https://www.securedfxcapital.com/en/forgot.php"
                  method="POST"
                  id=""
                  style={{ marginTop: "2rem" }}
                >
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form_box">
                        <input type="email" name="email" placeholder="E-mail" />
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                      <div class="form-button">
                        <button type="submit">Reset Password</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="footer-title" style={{ marginTop: "1rem" }}>
                  Don't have an account?{" "}
                  <a href="signup.php">
                    <span>Sign up</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
