import React, { useRef } from "react";
import "./contact.css";
import { BiEnvelope, BiMap, BiShareAlt, BiPhoneCall } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/footer";

const Contact = () => {
  const success = () =>
    toast.dark("Your email Send Successfully :)", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ebbyour",
        "template_9vh19qn",
        form.current,
        "XSEPxN5-GTnkfXDrL"
      )
      .then(
        (result) => {
          success();
          console.log(result.status);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section id="contact" className="contact section section-show">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map">
                  <BiMap size={30} />
                </i>
                <h3>My Address</h3>
                <p>Bradford, west yorkshire</p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx">
                  <BiShareAlt size={30} />
                </i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/mriym_b_/?igshid=YmMyMTA2M2Y="
                    className="instagram"
                  >
                    <i className="bi bi-instagram">
                      <BsInstagram />
                    </i>
                  </a>
                  <a
                    href="https://www.facebook.com/Mriym.B"
                    className="facebook"
                    
                  >
                    <i className="bi bi-facebook">
                      <BsFacebook />
                    </i>
                  </a>
                  <span className="twitter" onClick={notify}>
                    <i className="bi bi-twitter">
                      <BsTwitter />
                    </i>
                  </span>

                  <span className="linkedin" onClick={notify1}>
                    <i className="bi bi-linkedin">
                      <BsLinkedin />
                    </i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx">
                  <BiEnvelope size={30} />
                </i>
                <h3>Email Me</h3>
                <p>aleeshamariyam66@gmail.com</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx b-phone-call">
                  <BiPhoneCall size={30} />
                </i>
                <h3>Call Me</h3>
                <p>+44 7919 096756</p>
              </div>
            </div>
          </div>

          <form className="php-email-form mt-4" ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Contact;
