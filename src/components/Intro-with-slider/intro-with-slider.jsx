import React, { useEffect } from "react";
import Link from "next/link";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        <Swiper
          speed={300}
          parallax={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].childNodes[0].setAttribute(
                  "data-swiper-parallax",
                  0.75 * swiper.width
                );
              }
            });
          }}
          className="swiper-wrapper"
          slidesPerView={1}
        >
          {introData.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div
                className="bg-img valign"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30">
                        <h1 className="white-font ">
                          Sua solução Econômica, <br /> Renovável e <br />
                          Sustentável.
                        </h1>
                        {slide?.content && (
                          <p className="wow fadeInUp ls1 ">{slide.content}</p>
                        )}
                        <Link href="/account-reduction">
                          <a className="butn mt-30 btn-cta">
                            <span>SOLICITAR AGORA</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="social-icon">
          <a href="https://api.whatsapp.com/send?phone=55819999888888">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/company/tr-energia-solar/?originalSubdomain=br">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/tr.energiasolar/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://web.facebook.com/TR-Energia-Solar-108003291793647/">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider;
