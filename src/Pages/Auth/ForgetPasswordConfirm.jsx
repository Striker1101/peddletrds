import React, { useState } from "react";
import BreadCrumbAuth from "../../Components/BreadCrumbAuth";
import { apiPost } from "../../Utils/service";
import { handleError, handleSuccess } from "../../Components/ToastProvider";
import { useLocation } from "react-router-dom";

export default function ForgetPasswordConfirm() {
  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
    token: "",
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
      password: formData.password,
      token: formData.token || token,
      password_confirmation: formData.password,
      email,
    };

    if (!token && !formData.token) {
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

      <div className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-contact-box">
                <div className="contact-thumb">
                  <img
                    src="assets/images/contact.png"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles-contacts-box">
                <div className="row overflow-hidden">
                  <div className="col-lg-12 overflow-hidden">
                    <div className="sections-title overflow-hidden">
                      <div className="footer-logo overflow-hidden">
                        <img
                          src="assets/images/logo.png"
                          alt=""
                          style={{ width: "100%" }}
                        />
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
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form_box">
                        {/* <input
                          type="text"
                          defaultValue={formData.token}
                          onChange={handleChange}
                          name="token"
                          style={{ marginBottom: "5px" }}
                          required
                          placeholder="Token"
                        /> */}

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

                    <div className="col-lg-12 col-md-12">
                      <div className="form-button">
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
                <div className="footer-title" style={{ marginTop: "1rem" }}>
                  Don't have an account?{" "}
                  <a href="/register">
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
