import React, { useEffect, useState } from "react";
import "./services.css";
import { BsFillCameraFill } from "react-icons/bs";
import { serviceData } from "./serviceData";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(serviceData);
  }, []);

  const handel = () => {
    navigate("/contact");
  };
  return (
    <>
      <section id="services" className="services section-show ">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>My Services</p>
          </div>
          <div className="row">
            {data.map((data) => {
              return (
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch pointer my-2"
                  onClick={handel}
                >
                  <div className="icon-box card m-0 pb-4">
                    <div className="card-body m-0 p-0">
                      <div className="icon">
                        <i className="bx bxl-dribbble">
                          <BsFillCameraFill />
                        </i>
                      </div>
                      <h4>
                        <span>{data.title}</span>
                      </h4>
                      <p>{data.intro}</p>

                      <p
                        className={
                          data.price === "" ? "d-none" : "mt-3 text-warning"
                        }
                      >
                        {data.price}
                      </p>
                    </div>
                    <div className=" card-footer border-0 bg-transparent  m-0 p-0 mt-3">
                      <span
                        className="bg-secondary  p-1 px-4 rounded"
                        style={{ fontSize: "14px" }}
                      >
                        Contact For Pricing & Discounts
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className=" services section-show mt-1">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-stretch col-lg-3 my-2 ">
              <div className="card w-100 pointer border-0">
                <div class="card-header text-center header-basic">
                  <h1>Basic</h1>
                </div>
                <div class="card-body text-center">
                  <p>
                    <h2>£ 400</h2>
                  </p>
                  <div class="card-element-hidden-basic mt-5">
                    <ul class="card-element-container ">
                      <li class="card-element mt-2">1 Photographer</li>
                      <li class="card-element mt-2">
                        The Client will receive all the photos edited{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-center align-items-center border-0 bg-transparent">
                  <button class="btn btn-basic" onClick={handel}>
                    Contact us
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-stretch col-lg-3 my-2">
              <div className="card w-100 pointer border-0">
                <div class="card-header text-center header-standard">
                  <h1>Standard</h1>
                </div>
                <div class="card-body text-center">
                  <p>
                    <h2>£ 650</h2>
                  </p>
                  <div class="card-element-hidden-standard mt-5">
                    <ul class="card-element-container">
                      <li class="card-element mt-2">2 Photographer</li>
                      <li class="card-element mt-2">
                        The Client will receive all the photos edited with a few
                        second reel
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-center align-items-center border-0 bg-transparent">
                  <button class="btn btn-standard " onClick={handel}>
                    Contact us
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-stretch col-lg-3 my-2">
              <div className="card w-100 pointer border-0">
                <div class="card-header text-center header-premium">
                  <h1>Premium</h1>
                </div>
                <div class="card-body text-center">
                  <p>
                    <h2>£ 900</h2>
                  </p>
                  <div class="card-element-hidden-basic">
                    <ul class="card-element-container">
                      <li class="card-element mt-2">2 Photographer </li>
                      <li>1 Videographer</li>
                      <li class="card-element mt-2">
                        The Client will receive all the photos edited with
                        professional edited video
                      </li>
                      <li class="card-element mt-2">
                        2 Photos printed (size A4-A3) of Groom & Bride for free
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-center align-items-center border-0 bg-transparent ">
                  <button class="btn btn-premium " onClick={handel}>
                    Contact us
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-stretch col-lg-3 my-2">
              <div className="card w-100 pointer border-0">
                <div class="card-header text-center header-basic">
                  <h1>Other</h1>
                </div>
                <div class="card-body text-center">
                  <p>
                    
                  </p>
                  <div className="pt-4"></div>
                  <div class="card-element-hidden-basic mt-5">
                    <ul class="card-element-container">
                      <li class="card-element mt-2">
                        Personalised Photo albums are Available
                      </li>
                      <li class="card-element mt-2">
                        Sketch of Bride and Groom
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-center align-items-center border-0 bg-transparent">
                  <button class="btn btn-basic " onClick={handel}>
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 

            
            <div class="card pointer">
              <div class="card-header header-premium">
                <h1>Premium</h1>
              </div>
              <div class="card-body">
                <p>
                  <h2>£ 900</h2>
                </p>
                <div class="card-element-hidden-premium">
                  <ul class="card-element-container">
                    <li class="card-element">2 Photographer 1 Videographer </li>
                    <li class="card-element">
                      The Client will receive all the photos edited with
                      professional edited video
                    </li>
                    <li class="card-element">
                      2 Photos printed (size A4-A3) of Groom & Bride for free
                    </li>
                  </ul>
                  <button class="btn btn-premium">Contact Us</button>
                </div>
              </div>
            </div> */}
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Services;
