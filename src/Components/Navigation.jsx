import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="sticky-header" className="nav-menu">
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      src="assets/images/logo.png"
                      width={200}
                      height={50}
                      alt=""
                    />
                  </a>
                  <a className="main_sticky" href="index.html">
                    <img
                      src="assets/images/logo.png"
                      alt=""
                      width={200}
                      height={50}
                    />
                  </a>
                </div>
                <div className="heder-menu">
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
                  <div className="menu-button">
                    <Link to={"/login"}>Join us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-area d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu" style={{ backgroundColor: "#000616" }}>
          <nav className="itsoft_menu" style={{ backgroundColor: "#000616" }}>
            <ul className="nav_scroll" style={{ backgroundColor: "#000616" }}>
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
