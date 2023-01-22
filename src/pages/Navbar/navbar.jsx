import React, { useState } from "react";
import "./navbar.css";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/MB.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handelNav = () => {
    setNav((prev) => !prev);
  };
  const handelNav2 = () => {
    setNav(true);
  };

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <header id="header" className="fixed-top  header.header-scrolled">
        <div className="mx-3 d-flex justify-content-between align-items-center">
          <div>
            <h1>
              {/* <a href="index.html">Mariyam.B production</a> */}
              <Link to="/" className="mr-auto">
                <img
                  src={logo}
                  width="100px"
                  height="100px"
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </h1>
          </div>
          <div>
            <nav
              id="navbar"
              // className="navbar navbar-mobile"
              className={nav ? "navbar" : "navbar navbar-mobile"}
            >
              <ul>
                <li onClick={handelNav2}>
                  <Link
                    to="/"
                    className={
                      pathname === "/"
                        ? "nav-link scrollto active"
                        : "nav-link scrollto"
                    }
                  >
                    Home
                  </Link>
                </li>
          
                <li onClick={handelNav2}>
                  <Link
                    to="/services"
                    className={
                      pathname === "/services"
                        ? "nav-link scrollto active"
                        : "nav-link scrollto"
                    }
                  >
                    Services
                  </Link>
                </li>
                <li onClick={handelNav2}>
                  <Link
                    to="/gallery"
                    className={
                      pathname === "/gallery"
                        ? "nav-link scrollto active"
                        : "nav-link scrollto"
                    }
                  >
                    Gallery
                  </Link>
                </li>
                <li onClick={handelNav2}>
                  <Link
                    to="/contact"
                    className={
                      pathname === "/contact"
                        ? "nav-link scrollto active"
                        : "nav-link scrollto"
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" onClick={handelNav}>
                {/* {nav ? <BiMenu /> : <AiOutlineClose />} */}
                <BiMenu />
              </i>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
