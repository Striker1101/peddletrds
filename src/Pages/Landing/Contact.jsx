import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";

export default function Contact() {
  return (
    <div>
      <BreadCrumb link_name={"Home"} page_name={"Contact Us"} />
      {/* Start info-area */}
      <div className="info-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-info-box">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-area-title">
                  <h3>Address Info</h3>
                  <p>{process.env.REACT_APP_ADDRESS}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-info-box">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-area-title">
                  <h3>Phone Calls</h3>
                  <p>
                    {process.env.REACT_APP_PHONE_ONE} <br />{" "}
                    {process.env.REACT_APP_PHONE_TWO}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-info-box">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-area-title">
                  <h3>Email Address</h3>
                  <p>
                    {process.env.REACT_APP_EMAIL} <br />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start footer-area */}

      <div className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sections-title">
                <div className="sub-title">
                  <h3>contacts</h3>
                </div>
                <div className="main-title">
                  <h1>Write Us Something</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-contact-box">
                <div className="contact-thumb">
                  <img src="assets/images/contact.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles-contacts-box">
                <div className="contact-title">
                  <h3>get in touch</h3>
                </div>
                <form action="#" method="POST" id="dreamit-form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form_box">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form_box">
                        <input
                          type="text"
                          name="Enter E-mail"
                          placeholder="Enter E-Mail"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form_box">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form_box">
                        <textarea
                          name="massage"
                          id="massage"
                          cols="30"
                          rows="10"
                          placeholder="Massage"
                        ></textarea>
                      </div>
                      <div className="form-button">
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
