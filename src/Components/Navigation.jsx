import React from "react";
import { Link } from "react-router-dom";
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
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link to={"/service"}>Service</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                  <div class="menu-button">
                    <Link to={"/login"}>Join us</Link>
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
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/service"}>Service</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/auth/register"}>Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
