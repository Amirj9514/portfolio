import React from "react";
import aboutPic from "../../assets/about1.jpg";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import { FiAlertCircle } from "react-icons/fi";
import CountUp from "react-countup";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { BsEmojiSmile, BsJournalRichtext, BsHeadset } from "react-icons/bs";
const Home = () => {
  const data = [
    {
      id: "1",
      username: "Amir javeed",
      testimonial:
        "I can't recommend her enough. He went above and beyond,I look forward to working with him again in the future",
    },
    {
      id: "2",
      username: "javeed",
      testimonial:
        "As always, Mariyam is professional and proactive, and is always a big help for us on projects.We will definitely contact Mariyam for future assignments.",
    },
    {
      id: "3",
      username: "Amir",
      testimonial:
        " She was so skilled and produced a very professional. She overdelivered and provided triple the value of his fee. Highly recommend him for any project.",
    },
    {
      id: "4",
      username: "Athar",
      testimonial:
        "Had a fantastic day shooting  with Maryaim. She is extremely professional and hardworking and also easy to get along with which is always a bonus! Would definitely be working with him again",
    },
    {
      id: "5",
      username: "mohsin",
      testimonial:
        "Mariyam was a pleasure to work with. She is efficient, hardworking and she manages to get the job done in a timely manner. Would definitely recommend him and rehire him in the future.",
    },
    {
      id: "6",
      username: "mabroor",
      testimonial:
        "Maryaim was a pleasure to work with! Thank you so much for everything!",
    },
  ];

  return (
    <>
      <section
        id="hero"
        className="hero d-flex flex-column justify-content-center align-items-center section-show"
      >
        <div className="container mb-4">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>
                I'm <span>Mariyam.B</span> a Professional <i>Photographer</i>{" "}
                from Bradford, West Yorkshire
              </h2>
              <p>A CAMERA IS THE SAVE BUTTON FOR THE MIND’S EYE</p>
              <Link to="/contact" className="btn-get-started">
                Available for hire
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-show" style={{ marginTop: "1px" }}>
        <div className="about-me container ">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={aboutPic} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3 className="mb-4">Photographer</h3>
              <p className="fst-italic">
                Mariyam.B production is a wedding photograpy business based in
                Bradford, West Yorkshire region of England. we photograph
                Engagments, Birthday parties, Graduations, Headshots/Portraits
                etc. It gives us great pleasure to collaborate closely with you
                to produce an album that captures all of your priceless
                memories.
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
                      <strong className="co">Email:</strong>
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
                      <span>Bachelor of Arts with Honours</span>
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
                While growing up, I developed an interest in photography at a
                young age. My passion for photography was developed out of my
                studies in art, photography, and filmmaking. I have captures
                images of my clients on their special day in stunning and
                imaginative ways using my background in both art and
                photography. I Specializes in capturing the natural flow of
                events using my creative manner of approach. I am committed to
                capturing the beauty of your event in memory.
              </p>
              <div className="d-flex justify-centent-center align-items-center text-warning">
                <span>
                  <FiAlertCircle size={30} />{" "}
                </span>
                <span className="ps-3">Happy To Travel For Work </span>
              </div>
              <p></p>
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
                    <CountUp end={100} duration={6} />
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
            <div className="section-title mt-4 mb-5">
              <h2>Testimonials</h2>
            </div>

            <div className="testimonials-slider swiper">
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
                            {user.testimonial}
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                          {/* <img
                              src="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                              className="testimonial-img"
                              alt=""
                            /> */}
                          {/* <h3>{}</h3> */}
                          <h4>Client</h4>
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
      <Footer />
    </>
  );
};

export default Home;
