import React, { useState } from "react";
import BreadCrumbAuth from "../../Components/BreadCrumbAuth";
import { apiPost } from "../../Utils/service";
import { handleError, handleSuccess } from "../../Components/ToastProvider";
import { useLocation } from "react-router-dom";

export default function ForgetPasswordConfirm() {
  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const token = queryParams.get("token");
  const email = queryParams.get("email");

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
    if (formData.password !== formData.password_confirmation) {
      handleError({ message: "Password do not match" });
    }

    setLoading(true);

    const data = {
      ...formData,
      token,
      email,
    };

    if (!token || !email) {
      window.location.href = "/forget_password";
    }

    apiPost("/auth/password/reset", data)
      .then((response) => {
        setLoading(false);

        if (response.status === 200) {
          handleSuccess(response.data.message);
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000); // Redirect on success
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
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
                  onSubmit={handleSubmit}
                  method="POST"
                  id=""
                  style={{ marginTop: "2rem" }}
                >
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form_box">
                        <input
                          type="password"
                          defaultValue={formData.password}
                          onChange={handleChange}
                          name="password"
                          required
                          placeholder="Password"
                        />

                        <input
                          type="password"
                          style={{ marginTop: "5px" }}
                          defaultValue={formData.password_confirmation}
                          onChange={handleChange}
                          name="password_confirmation"
                          required
                          placeholder="Confirm Password"
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
                          Reset Password
                        </button>
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
