import React, { useState } from "react";
import BreadCrumbAuth from "../../Components/BreadCrumbAuth";
import { apiPost } from "../../Utils/service";
import { handleSuccess } from "../../Components/ToastProvider";

export default function ForgetPassword() {
  const [formData, setFormData] = useState({
    email: "",
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

    apiPost("/auth/password/email", formData)
      .then((response) => {
        setLoading(false);

        if (response.status === 200) {
          handleSuccess(response.data.message);
          // setTimeout(() => {
          //   window.location.href = `/confirm_password?email=${formData.email}`;
          // }, 1000);
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
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sections-title">
                      <div className="footer-logo">
                        <img
                          src="assets/images/logo.png"
                          alt=""
                          style={{
                            width: "100%",
                          }}
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
                        <input
                          defaultValue={formData.email}
                          onChange={handleChange}
                          type="email"
                          name="email"
                          placeholder="E-mail"
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
                          Send Reset Mail
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
