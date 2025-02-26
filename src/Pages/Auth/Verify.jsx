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

      <div class="contact-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 ">
              <section class="py-50">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-6 col-12">
                      <div class="box box-body mb-0">
                        <div class="tab-content">
                          <div>
                            <div class="content-top-agile pb-0 pt-20">
                              <p class="mb-0">Enter verification Code</p>
                            </div>
                            <div class="p-40">
                              <form method="post" onSubmit={handleSubmit}>
                                <div class="form-group">
                                  <div class="input-group mb-15">
                                    <span class="input-group-text  bg-transparent">
                                      <i class="ti-lock"></i>
                                    </span>
                                    <input
                                      type="number"
                                      maxLength={4}
                                      style={{ color: "white" }}
                                      name="code"
                                      onChange={(e) =>
                                        setCode(e.currentTarget.value)
                                      }
                                      class="form-control ps-15 bg-transparent"
                                      placeholder="Verification Code"
                                    />
                                  </div>

                                  {!getUser().email && (
                                    <div
                                      class="input-group mb-15"
                                      style={{ marginTop: "5px" }}
                                    >
                                      <span class="input-group-text  bg-transparent">
                                        <i class="ti-lock"></i>
                                      </span>
                                      <input
                                        type="email"
                                        maxLength={4}
                                        style={{ color: "white" }}
                                        name="email"
                                        onChange={(e) =>
                                          setEmail(e.currentTarget.value)
                                        }
                                        class="form-control ps-15 bg-transparent"
                                        placeholder="Email"
                                      />
                                    </div>
                                  )}
                                </div>
                                <div class="row">
                                  {/* <!-- /.col --> */}

                                  <div class="col-6 text-center">
                                    <button
                                      type="button"
                                      onClick={handleResend}
                                      disabled={loading}
                                      class="btn btn-info w-p100 mt-15"
                                    >
                                      Resend
                                    </button>
                                  </div>

                                  <div class="col-6 text-center">
                                    <button
                                      type="submit"
                                      name="submit"
                                      disabled={loading}
                                      class="btn btn-info w-p100 mt-15"
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
