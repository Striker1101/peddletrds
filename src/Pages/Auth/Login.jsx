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
      <div className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-contact-box">
                <div className="contact-thumb"></div>
                <img
                  src="assets/images/contact.png"
                  alt="contact"
                  className="img-fluid"
                  style={{ maxWidth: "250px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles-contacts-box">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sections-title">
                      <div className="footer-logo"></div>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  method="post"
                  style={{ marginTop: "2rem" }}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form_box">
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
                    <div className="col-lg-6 col-md-6">
                      <div className="form_box">
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

                    <div className="col-lg-12 col-md-12">
                      <div className="form-button">
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
                <div className="footer-title" style={{ marginTop: "1rem" }}>
                  <Link to={"/forget_password"}>
                    <span>Forgot Password?</span>
                  </Link>
                </div>
                <div className="footer-title" style={{ marginTop: "1rem" }}>
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
    </div>
  );
}
