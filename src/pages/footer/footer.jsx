import React from "react";
import "./footer.css";
import logo from "../../assets/MB.png";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const notify = () =>
    toast.info(`Currently, I am not available on Twitter`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notify1 = () =>
    toast.info(`Currently, I am not available on Linkedin`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notify2 = () =>
    toast.info(`Currently, I am not available on Facebook`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <>
      <footer id="footer" className="mt-5">
        <div className="container mt-0 pt-0">
          <h3>
            <img src={logo} width="300px" height="200px" alt="logo" />
          </h3>
          <p className="mt-3">A CAMERA IS THE SAVE BUTTON FOR THE MIND’S EYE</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/mriym_b_/?igshid=YmMyMTA2M2Y="
              className="instagram"
            >
              <i className="bx bxl-instagram">
                <BsInstagram />
              </i>
            </a>
            <a
              href="https://www.facebook.com/Mriym.B"
              className="facebook pointer"
            >
              <i className="bx">
                <BsFacebook />
              </i>
            </a>
            <span className="twitter pointer" onClick={notify}>
              <i className="bx">
                <BsTwitter />
              </i>
            </span>

            <span className="linkedin pointer" onClick={notify1}>
              <i className="bx bxl-linkedin">
                <BsLinkedin />
              </i>
            </span>
          </div>
          <div className="copyright">
            Copyright
            <strong>
              <span className="px-2"> Mariyam.B Production</span>
            </strong>
            . All Rights Reserved
          </div>
          {/* <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div> */}
        </div>
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Footer;
