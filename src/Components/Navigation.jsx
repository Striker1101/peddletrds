import React from "react";

export default function Navigation() {
  return (
    <>
      <div class="main-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div id="sticky-header" class="nav-menu">
                <div class="header-logo">
                  <a href="index.html">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                  <a class="main_sticky" href="index.html">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </div>
                <div class="heder-menu">
                  <ul>
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <a href="about.html">about</a>
                    </li>
                    <li>
                      <a href="service.html">services</a>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                  <div class="menu-button">
                    <a href="login.php">Join us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-menu-area d-sm-block d-md-block d-lg-none">
        <div class="mobile-menu" style={{ backgroundColor: "#000616" }}>
          <nav class="itsoft_menu" style={{ backgroundColor: "#000616" }}>
            <ul class="nav_scroll" style={{ backgroundColor: "#000616" }}>
              <li>
                <a href="index.html">home</a>
              </li>
              <li>
                <a href="about.html">about</a>
              </li>
              <li>
                <a href="service.html">services</a>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
              <li>
                <a href="login.php">login</a>
              </li>
              <li>
                <a href="signup.php">sign up</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
