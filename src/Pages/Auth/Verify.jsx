import React, { useState } from "react";
import BreadCrumbAuth from "../../Components/BreadCrumbAuth";
import { apiPost } from "../../Utils/service";
import { toast } from "react-toastify";
import { getUser } from "../../Utils/transform";

export default function Verify() {
  const [code, setCode] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    apiPost("/verify_user_token", { token: code })
      .then((res) => {
        toast.success("User successfully verified.");

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Invalid verification token.");
        setLoading(false);
      });
  };

  function handleResend(e) {
    e.preventDefault();
    setLoading(true);
    apiPost("/resend_user_token", { email: getUser().email || email })
      .then((res) => {
        toast.success(res?.response?.data?.message || "User Token Resent.");
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(
          err?.response?.data?.message || "Invalid verification token."
        );
        setLoading(false);
      });
  }

  return (
    <div>
      <BreadCrumbAuth name={"verify"} />

      <div className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <section className="py-50">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                      <div className="box box-body mb-0">
                        <div className="tab-content">
                          <div>
                            <div className="content-top-agile pb-0 pt-20">
                              <p className="mb-0">Enter verification Code</p>
                            </div>
                            <div className="p-40">
                              <form method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                  <div className="input-group mb-15">
                                    <span className="input-group-text  bg-transparent">
                                      <i className="ti-lock"></i>
                                    </span>
                                    <input
                                      type="number"
                                      maxLength={4}
                                      style={{ color: "white" }}
                                      name="code"
                                      onChange={(e) =>
                                        setCode(e.currentTarget.value)
                                      }
                                      className="form-control ps-15 bg-transparent"
                                      placeholder="Verification Code"
                                    />
                                  </div>

                                  {!getUser().email && (
                                    <div
                                      className="input-group mb-15"
                                      style={{ marginTop: "5px" }}
                                    >
                                      <span className="input-group-text  bg-transparent">
                                        <i className="ti-lock"></i>
                                      </span>
                                      <input
                                        type="email"
                                        maxLength={4}
                                        style={{ color: "white" }}
                                        name="email"
                                        onChange={(e) =>
                                          setEmail(e.currentTarget.value)
                                        }
                                        className="form-control ps-15 bg-transparent"
                                        placeholder="Email"
                                      />
                                    </div>
                                  )}
                                </div>
                                <div className="row">
                                  {/* <!-- /.col --> */}

                                  <div className="col-6 text-center">
                                    <button
                                      type="button"
                                      onClick={handleResend}
                                      disabled={loading}
                                      className="btn btn-info w-p100 mt-15"
                                    >
                                      Resend
                                    </button>
                                  </div>

                                  <div className="col-6 text-center">
                                    <button
                                      type="submit"
                                      name="submit"
                                      disabled={loading}
                                      className="btn btn-info w-p100 mt-15"
                                    >
                                      Verify
                                    </button>
                                  </div>
                                  {/* <!-- /.col --> */}
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
