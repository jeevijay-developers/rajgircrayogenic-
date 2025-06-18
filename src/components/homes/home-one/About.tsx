"use client";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Count from "@/components/common/Count";

import about_img1 from "@/assets/img/about/about.jpg";
import about_img2 from "@/assets/img/about/border-shape.png";
import about_img3 from "@/assets/img/about/video.jpg";
import about_img4 from "@/assets/img/arrow-shape.png";
import about_img5 from "@/assets/img/fac1.jpeg";
import about_img6 from "@/assets/img/fac1R.jpeg";
import about_img7 from "@/assets/img/image4.jpeg";
import about_img8 from "@/assets/img/rajgir/9.jpeg";

interface DataType {
  sub_title: string;
  title: JSX.Element;
  desc: string;
  about_list: string[];
}

const about_data: DataType = {
  sub_title: "ABOUT TO Industril",
  title: (
    <>
      Why Choose Rajgir Cryogenic Gases?
      {/* <span style={{ color: "#ffe000" }}> Since 1984 </span> */}
    </>
  ),
  desc: "Whether you’re striving for personal growth, professional success, or a balanced life, Kanchan Ma’am is here to guide you with proven techniques and strategies. Through *seminars, webinars, and personalized coaching*, she has transformed the lives of thousands.",
  about_list: [
    "Join now and embark on a journey toward *self-mastery and success!",
  ],
};

const { sub_title, title, desc, about_list } = about_data;

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="about-section fix section-padding section-bg">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div
                className="col-xl-6 col-lg-8 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="about-image"
                  style={{
                    border: "4px solid white",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={about_img8}
                    alt="img"
                    style={{
                      border: "4px solid white",
                      borderRadius: "10px",
                      // objectFit: "fill",
                      height: "100%",
                    }}
                  />
                  <div
                    className="border-shape"
                    // style={{ backgroundColor: "#ffe000" }}
                  >
                    {/* <Image src={about_img2} alt="shape-img" /> */}
                  </div>
                  <div className="video-image">
                    {/* <Image src={about_img3} alt="img" /> */}
                    <div className="video-box">
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}
                        className="video-btn ripple video-popup"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="working-area float-bob-y">
                    <div className="inner">
                      <div className="icon-box">
                        <i className="fa-solid fa-industry"></i>
                        <h3>
                          <span className="count">10+</span> Years of
                        </h3>
                        <p style={{ textAlign: "center" }}>
                          Trusted Expertise in
                        </p>
                        <p style={{ textAlign: "left" }}>
                          CO<sub>2</sub> solutions for industries including{" "}
                          <br />
                          food & beverage, pharmaceuticals, <br />
                          agriculture, welding, and more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 mt-5 mt-xl-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Rajgir Cryogenic Gases</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Why Choose Us?
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    At Rajgir Cryogenic Gases, we are dedicated to delivering
                    reliable, efficient, and eco-friendly CO<sub>2</sub>{" "}
                    solutions. With years of experience across multiple
                    industries, we provide cutting-edge technology and
                    customized services for all your carbon dioxide needs.
                  </p>
                  <ul className="wow fadeInUp" data-wow-delay=".7s">
                    <li>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#14b2f1" }}
                      ></i>
                      Reliable & Efficient CO<sub>2</sub> Solutions
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#14b2f1" }}
                      ></i>
                      Custom-Designed Systems for Diverse Industries
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#14b2f1" }}
                      ></i>
                      Sustainable CO<sub>2</sub> Recovery & Reuse
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#14b2f1" }}
                      ></i>
                      High-Purity Dry Ice Production
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#14b2f1" }}
                      ></i>
                      Advanced Storage & Transportation Solutions
                    </li>
                  </ul>
                  <div
                    className="about-info-items wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <Link href="/about" className="theme-btn-2">
                      Know More About Us
                      <span className="shape-img">
                        <Image src={about_img4} alt="shape-img" />
                      </span>
                    </Link>
                    <div className="call-area">
                      <span>or Call us</span>
                      <div className="icon">
                        <i className="fa-solid fa-phone-volume"></i>
                        <h6>
                          <Link
                            href="tel:+91-9096207767"
                            style={{ color: "#ffe000" }}
                          >
                            +91 9639020081
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
    </>
  );
};

export default About;
