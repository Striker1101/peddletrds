import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";

export default function Contact() {
  return (
    <div>
      <BreadCrumb link_name={"Home"} page_name={"Contact Us"} />
      {/* Start info-area */}
      <div class="info-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-info-box">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="info-area-title">
                  <h3>Address Info</h3>
                  <p>
                    Artemis House, 12 Street, Grand Cayman, KY1-1156, Cayman
                    Islands
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-info-box">
                <div class="info-icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="info-area-title">
                  <h3>Phone Calls</h3>
                  <p>
                    +98 (5784) 123 789 <br /> +88 (3412) 876 346
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-info-box">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="info-area-title">
                  <h3>Email Address</h3>
                  <p>
                    support@peddletrds.com <br />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start footer-area */}

      <div class="contact-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sections-title">
                <div class="sub-title">
                  <h3>contacts</h3>
                </div>
                <div class="main-title">
                  <h1>Write Us Something</h1>
                </div>
              </div>
            </div>
          </div>
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
                <div class="contact-title">
                  <h3>get in touch</h3>
                </div>
                <form action="#" method="POST" id="dreamit-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form_box">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form_box">
                        <input
                          type="text"
                          name="Enter E-mail"
                          placeholder="Enter E-Mail"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form_box">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form_box">
                        <textarea
                          name="massage"
                          id="massage"
                          cols="30"
                          rows="10"
                          placeholder="Massage"
                        ></textarea>
                      </div>
                      <div class="form-button">
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
