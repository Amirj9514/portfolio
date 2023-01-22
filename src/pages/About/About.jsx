import React from "react";
import aboutPic from "../../assets/about.jpg";
import "./about.css";
import CountUp from "react-countup";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { BsEmojiSmile, BsJournalRichtext, BsHeadset } from "react-icons/bs";
import Footer from "../footer/footer";

const About = () => {
  const data = [
    {
      id: "1",
      username: "Amir javeed",
      testimonial:
        "   Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at sempe ",
    },
    {
      id: "2",
      username: "javeed",
      testimonial:
        "   Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at sempe ",
    },
    {
      id: "3",
      username: "Amir",
      testimonial:
        "   Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at sempe ",
    },
    {
      id: "4",
      username: "Athar",
      testimonial:
        "   Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at sempe ",
    },
    {
      id: "5",
      username: "mohsin",
      testimonial:
        "   Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at sempe ",
    },
    {
      id: "6",
      username: "mabroor",
      testimonial:
        "   Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at sempe ",
    },
  ];

  return (
    <>
      <main className="" id="main">
        <section className="about section-show">
          <div className="about-me container ">
            <div className="section-title">
              <h2>About</h2>
              <p>Learn more about me</p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src={aboutPic} className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3 className="mb-4">Photographer</h3>
                <p className="fst-italic">
                  Mariyam.B production is a wedding photograpy business based in
                  Bradford, West Yorkshire region of England.
                </p>
                <div className="row">
                  <div className="col-lg-6 h-100 my-3 align-items-center">
                    <ul>
                      {/* <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>1 May 1995</span>
                    </li> */}
                      <li>
                        <i className="bi bi-chevron-right "></i>
                        <strong className="co">Website:</strong>
                        <span>aleeshamariyam66@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong className="co">Phone:</strong>{" "}
                        <span>+44 7919 096756</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right "></i>{" "}
                        <strong className="co">City:</strong>
                        <span>Bradford, west yorkshire</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 my-3">
                    <ul>
                      {/* <li>
                      <i className="bi bi-chevron-right"></i> <strong>Age:</strong>
                      <span>30</span>
                    </li> */}
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong className="co">Degree:</strong>{" "}
                        <span>Master</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong className="co">Emailone:</strong>
                        <span>aleeshamariyam66@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong className="co">Freelance:</strong>{" "}
                        <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  we photograph Engagments, Birthday parties, Graduations,
                  Headshots/Portraits etc. It gives us great pleasure to
                  collaborate closely with you to produce an album that captures
                  all of your priceless memories.
                </p>
              </div>
            </div>
            <div className="counts container mt-3">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile">
                      <BsEmojiSmile />
                    </i>
                    <span
                      // data-purecounter-start="0"
                      // data-purecounter-end="232"
                      // data-purecounter-duration="1"
                      className="purecounter"
                    >
                      <CountUp end={200} duration={6} />
                    </span>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext">
                      <BsJournalRichtext />
                    </i>
                    <span
                      // data-purecounter-start="0"
                      // data-purecounter-end="521"
                      // data-purecounter-duration="1"
                      className="purecounter"
                    >
                      <CountUp end={20} duration={6} />
                    </span>
                    <p>Projects</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                  <div className="count-box">
                    <i className="bi bi-headset">
                      <BsHeadset />
                    </i>
                    <span
                      // data-purecounter-start="0"
                      // data-purecounter-end="1463"
                      // data-purecounter-duration="1"
                      className="purecounter"
                    >
                      <CountUp end={300} duration={6} />
                    </span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonials container">
              <div className="section-title mt-4">
                <h2>Testimonials</h2>
              </div>

              <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Autoplay,
                    ]}
                    spaceBetween={50}
                    //  slidesPerView={3}
                    breakpoints={{
                      // when window width is >= 640px
                      640: {
                        width: 640,
                        slidesPerView: 1,
                      },
                      // when window width is >= 768px
                      768: {
                        width: 768,
                        slidesPerView: 2,
                      },
                    }}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {data.map((user) => (
                      <SwiperSlide key={user.id}>
                        <div className="swiper-slide">
                          <div className="testimonial-item">
                            <p>
                              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                              Proin iaculis purus consequat sem cure digni ssim
                              donec porttitora entum suscipit rhoncus.
                              Accusantium quam, ultricies eget id, aliquam eget
                              nibh et. Maecen aliquam, risus at semper.
                              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img
                              src="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                              className="testimonial-img"
                              alt=""
                            />
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default About;
