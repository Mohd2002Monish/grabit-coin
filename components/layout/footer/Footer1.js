import Link from "next/link";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
export default function Footer1() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 10,
      easing: "ease-in-out",
      delay: 0,
      once: false,
      mirror: false,
    });
  }, []);
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <>
      <footer className="footer">
        <div className="shape" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer__main">
                <div className="block-text center">
                  <h3 className="heading">Whitepaper</h3>
                  <p
                    style={{
                      marginBottom: "20px",
                      textTransform: "capitalize",
                    }}
                  >
                    comprehensive overview of the Grabit Shop platform
                  </p>
                </div>
                {/* <Swiper
                  
                  {...swiperOptions}
                  className="swiper project-swiper"
                > */}
                {/* <div className="swiper-wrapper"> */}
                {/* <SwiperSlide> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div data-aos="zoom-in" className="project-box">
                    <div className="image">
                      <div>
                        <img
                          src="/assets/images/layouts/whitepaper.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();

                        const newTab = window.open(
                          "/assets/images/Self/selfpdf.pdf",
                          "_blank"
                        );
                        const link = document.createElement("a");
                        link.href = "/assets/images/Self/selfpdf.pdf";
                        link.download = "GrabitShop_WhitePaper_V1";
                        link.click();
                        if (newTab) {
                          newTab.close();
                        }
                      }}
                      className="container2"
                    >
                      <button className="cta2">
                        <MdOutlineDownloadForOffline
                          className="iconBtnDownload"
                          fontSize={"21px"}
                        />
                        <span className="button-text2">
                          <p1> Download</p1>
                          <MdOutlineDownloadForOffline fontSize={"21px"} />{" "}
                        </span>
                      </button>
                    </a>
                  </div>
                  {/* <div className="project-box content">
                          <div
                            style={{ textAlign: "center" }}
                            href={"3"}
                            className="hoverEffect h5 title"
                          >
                            King of Pirates
                          </div>
                        </div> */}
                </div>
                {/* </SwiperSlide> */}
                {/* <SwiperSlide>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div className="project-box">
                          <div className="image">
                            <div>
                              <img src="/assets/images/Self/self1.png" alt="" />
                            </div>
                          </div>
                          <a
                            href={"/assets/images/Self/selfpdf.pdf"}
                            download={"selfpdf.pdf"}
                            className="container2"
                          >
                            <button className="cta2">
                              <MdOutlineDownloadForOffline
                                className="iconBtnDownload"
                                fontSize={"21px"}
                              />
                              <span className="button-text2">
                                <p1> Download</p1>
                                <MdOutlineDownloadForOffline
                                  fontSize={"21px"}
                                />{" "}
                              </span>
                            </button>
                          </a>
                        </div>
                        <div className="project-box content">
                          <div
                            style={{ textAlign: "center" }}
                            href={"3"}
                            className="hoverEffect h5 title"
                          >
                            Monkey d. Luffy
                          </div>
                        </div>
                      </div>
                    </SwiperSlide> */}
                {/* </div> */}
                {/* </Swiper> */}
              </div>
              <div className="footer__bottom">
                <a href="/" className="logo">
                  <img src="/assets/images/logo/logo.png" alt="" />
                </a>
                <div className="center mb--30">
                  <ul className="list">
                    <li>
                      <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        Home
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        About
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="explore"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        Explore
                      </ScrollLink>
                    </li>

                    <li>
                      <ScrollLink
                        to="tokenomics"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        Tokenomics
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="roadmap"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        Roadmap
                      </ScrollLink>
                    </li>

                    {/* <li>
                      <a href="/contact">Contact</a>
                    </li> */}
                  </ul>
                  <p>
                    Copyright © {new Date().getFullYear()} by Grabit Shop. All
                    Rights Reserved.
                  </p>
                </div>
                <ul className="list-social">
                  <li>
                    <a href="#">
                      <svg
                        fill="#FFFFFF"
                        viewBox="0 0 50 50"
                        width={25}
                        height={24}
                      >
                        <path d="M41.626,10.768C37.644,7.567,31.347,7.025,31.08,7.003c-0.42-0.036-0.819,0.202-0.992,0.587c-0.012,0.025-0.15,0.34-0.303,0.833c2.633,0.443,5.867,1.339,8.794,3.155c0.469,0.291,0.613,0.907,0.322,1.377c-0.189,0.305-0.516,0.473-0.851,0.473c-0.18,0-0.362-0.048-0.526-0.15C32.494,10.158,26.209,10,25,10s-7.495,0.158-12.523,3.278c-0.47,0.292-1.086,0.147-1.377-0.322c-0.292-0.47-0.147-1.086,0.322-1.377c2.927-1.815,6.16-2.712,8.794-3.155c-0.154-0.493-0.292-0.808-0.303-0.833c-0.173-0.386-0.571-0.629-0.993-0.587c-0.266,0.021-6.563,0.563-10.598,3.809C6.213,12.76,2,24.152,2,34c0,0.174,0.045,0.344,0.131,0.495c2.909,5.109,10.842,6.447,12.649,6.504C14.791,41,14.801,41,14.812,41c0.319,0,0.62-0.152,0.809-0.411l1.829-2.513c-4.933-1.276-7.453-3.439-7.598-3.568c-0.414-0.365-0.453-0.997-0.087-1.411c0.365-0.414,0.995-0.453,1.41-0.089C11.236,33.062,15.875,37,25,37c9.141,0,13.782-3.953,13.828-3.993c0.414-0.359,1.045-0.323,1.409,0.094c0.364,0.414,0.325,1.043-0.088,1.407c-0.146,0.129-2.666,2.292-7.599,3.568l1.829,2.513C34.568,40.848,34.869,41,35.188,41c0.011,0,0.021,0,0.031-0.001c1.809-0.057,9.741-1.395,12.649-6.504C47.955,34.344,48,34.174,48,34C48,24.152,43.787,12.76,41.626,10.768z M18.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C22,28.209,20.433,30,18.5,30z M31.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C35,28.209,33.433,30,31.5,30z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        fill="#FFFFFF"
                        version="1.1"
                        baseProfile="basic"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                      >
                        <path
                          d="M15.93,24.711c0.743-0.316,13.613-5.781,14.62-6.144c0.735-0.265,1.367-0.367,1.794-0.162
	c0.353,0.169,0.533,0.549,0.479,1.119c-0.18,1.884-1.646,11.446-1.959,12.405c-0.267,0.819-0.549,1.526-1.085,1.526
	s-1.121-0.187-1.699-0.599c-0.578-0.413-4.41-2.983-4.943-3.319c-0.467-0.294-0.961-1.029-0.265-1.738
	c0.573-0.584,4.917-4.8,5.289-5.172c0.371-0.371,0.009-0.847-0.445-0.476s-6.784,4.606-7.332,4.947
	c-0.517,0.321-1.44,0.516-2.251,0.292c-0.842-0.232-2.268-0.664-2.834-0.866c-0.544-0.194-0.742-0.382-0.742-0.714
	C14.558,25.337,15.225,25.011,15.93,24.711z"
                        />
                        <path
                          id="circle_2_"
                          d="M25,8c9.389,0,17,7.611,17,17s-7.611,17-17,17S8,34.389,8,25S15.611,8,25,8z M25,41c8.837,0,16-7.163,16-16
	S33.837,9,25,9S9,16.163,9,25S16.163,41,25,41z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0006 14V8.87249C14.0006 6.35249 13.4581 4.42749 10.5181 4.42749C9.10062 4.42749 8.15563 5.19749 7.77063 5.93249H7.73563V4.65499H4.95312V14H7.85813V9.36249C7.85813 8.13749 8.08563 6.96499 9.59063 6.96499C11.0781 6.96499 11.0956 8.34749 11.0956 9.43249V13.9825H14.0006V14Z"
                          fill="white"
                        />
                        <path
                          d="M0.226562 4.65479H3.13156V13.9998H0.226562V4.65479Z"
                          fill="white"
                        />
                        <path
                          d="M1.68 0C0.7525 0 0 0.7525 0 1.68C0 2.6075 0.7525 3.3775 1.68 3.3775C2.6075 3.3775 3.36 2.6075 3.36 1.68C3.36 0.7525 2.6075 0 1.68 0Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        width={18}
                        height={12}
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2347 1.9639C17.1458 1.22216 16.4468 0.510897 15.7154 0.415609C11.2555 -0.138536 6.7457 -0.138536 2.28731 0.415609C1.55533 0.51069 0.856308 1.22216 0.76739 1.9639C0.452537 4.68236 0.452537 7.31818 0.76739 10.036C0.856308 10.7778 1.55533 11.4897 2.28731 11.5843C6.7457 12.1384 11.2557 12.1384 15.7154 11.5843C16.4468 11.4898 17.1458 10.7778 17.2347 10.036C17.5496 7.31842 17.5496 4.68236 17.2347 1.9639ZM7.58931 8.82375V3.17703L11.8243 6.00049L7.58931 8.82375Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

{
  /* <footer className="footer">
<div className="shape" />
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="footer__main">
                <div className="block-text center">
                    <h3 className="heading"></h3>
                    <p>Get udpated with news, tips &amp; tricks</p>
                </div>
                <form action="#" className="form">
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your email" />
                    </div>
                    <button className="action-btn"><span>Subscribe</span></button>
                </form>
            </div>
            <div className="footer__bottom">
                <a href="/" className="logo"><img src="/assets/images/logo/logo.png" alt="" /></a>
                <div className="center mb--30">
                    <ul className="list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/nft">Explore</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/nft">Collections</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <p>Copyright © {new Date().getFullYear()}, Grabit. Designed by Themesflat</p>
                </div>
                <ul className="list-social">
                    <li><a href="#">
                        <svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.57969 9.03953C2.51969 9.03953 1.19969 9.03953 0.599688 9.03953C0.279688 9.03953 0.179688 8.91953 0.179688 8.61953C0.179688 7.81953 0.179688 6.99953 0.179688 6.19953C0.179688 5.87953 0.299688 5.77953 0.599688 5.77953H2.57969C2.57969 5.71953 2.57969 4.55953 2.57969 4.01953C2.57969 3.21953 2.71969 2.45953 3.11969 1.75953C3.53969 1.03953 4.13969 0.559531 4.89969 0.279531C5.39969 0.0995311 5.89969 0.0195312 6.43969 0.0195312H8.39969C8.67969 0.0195312 8.79969 0.139531 8.79969 0.419531V2.69953C8.79969 2.97953 8.67969 3.09953 8.39969 3.09953C7.85969 3.09953 7.31969 3.09953 6.77969 3.11953C6.23969 3.11953 5.95969 3.37953 5.95969 3.93953C5.93969 4.53953 5.95969 5.11953 5.95969 5.73953H8.27969C8.59969 5.73953 8.71969 5.85953 8.71969 6.17953V8.59953C8.71969 8.91953 8.61969 9.01953 8.27969 9.01953C7.55969 9.01953 6.01969 9.01953 5.95969 9.01953V15.5395C5.95969 15.8795 5.85969 15.9995 5.49969 15.9995C4.65969 15.9995 3.83969 15.9995 2.99969 15.9995C2.69969 15.9995 2.57969 15.8795 2.57969 15.5795C2.57969 13.4795 2.57969 9.09953 2.57969 9.03953Z" fill="white" />
                        </svg>
                    </a></li>
                    <li><a href="#">
                        <svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 1.42062C13.9794 1.66154 13.4246 1.82123 12.8462 1.89877C13.4412 1.524 13.8954 0.935077 14.1089 0.225231C13.5541 0.574154 12.9416 0.820615 12.2889 0.958154C11.7621 0.366462 11.0114 0 10.1924 0C8.60337 0 7.32412 1.36062 7.32412 3.02862C7.32412 3.26862 7.34338 3.49938 7.39062 3.71908C5.0045 3.59631 2.89313 2.38985 1.47475 0.552C1.22712 1.00523 1.08188 1.524 1.08188 2.08246C1.08188 3.13108 1.59375 4.06062 2.35675 4.59877C1.89562 4.58954 1.44325 4.44831 1.06 4.22585C1.06 4.23508 1.06 4.24708 1.06 4.25908C1.06 5.73046 2.05487 6.95262 3.3595 7.23415C3.12587 7.30154 2.87125 7.33385 2.607 7.33385C2.42325 7.33385 2.23775 7.32277 2.06362 7.28215C2.4355 8.48123 3.49075 9.36277 4.7455 9.39138C3.769 10.1972 2.52912 10.6828 1.18688 10.6828C0.9515 10.6828 0.72575 10.6717 0.5 10.6412C1.77137 11.5062 3.27813 12 4.903 12C10.1845 12 13.072 7.38462 13.072 3.384C13.072 3.25015 13.0676 3.12092 13.0615 2.99262C13.6311 2.56615 14.1097 2.03354 14.5 1.42062Z" fill="white" />
                        </svg>
                    </a></li>
                    <li><a href="#">
                        <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0006 14V8.87249C14.0006 6.35249 13.4581 4.42749 10.5181 4.42749C9.10062 4.42749 8.15563 5.19749 7.77063 5.93249H7.73563V4.65499H4.95312V14H7.85813V9.36249C7.85813 8.13749 8.08563 6.96499 9.59063 6.96499C11.0781 6.96499 11.0956 8.34749 11.0956 9.43249V13.9825H14.0006V14Z" fill="white" />
                            <path d="M0.226562 4.65479H3.13156V13.9998H0.226562V4.65479Z" fill="white" />
                            <path d="M1.68 0C0.7525 0 0 0.7525 0 1.68C0 2.6075 0.7525 3.3775 1.68 3.3775C2.6075 3.3775 3.36 2.6075 3.36 1.68C3.36 0.7525 2.6075 0 1.68 0Z" fill="white" />
                        </svg>
                    </a></li>
                    <li><a href="#">
                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2347 1.9639C17.1458 1.22216 16.4468 0.510897 15.7154 0.415609C11.2555 -0.138536 6.7457 -0.138536 2.28731 0.415609C1.55533 0.51069 0.856308 1.22216 0.76739 1.9639C0.452537 4.68236 0.452537 7.31818 0.76739 10.036C0.856308 10.7778 1.55533 11.4897 2.28731 11.5843C6.7457 12.1384 11.2557 12.1384 15.7154 11.5843C16.4468 11.4898 17.1458 10.7778 17.2347 10.036C17.5496 7.31842 17.5496 4.68236 17.2347 1.9639ZM7.58931 8.82375V3.17703L11.8243 6.00049L7.58931 8.82375Z" fill="white" />
                        </svg>
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</footer> */
}
