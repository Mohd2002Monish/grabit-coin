import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";
export default function Roadmap1() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
      easing: "ease-in-out",
      delay: 0,
      once: false,
      mirror: true,
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);

  const isMobile = window.innerWidth < 768;
  return (
    <>
      <section className="roadmap">
        <img
          src="/assets/images/background/line.png"
          alt=""
          className="img-line"
        />
        <div className="shape" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Road Map</span>
                </h6>
                <h3 className="heading wow" data-splitting>
                  The Journey of <br />
                  Grabit Shop
                </h3>
              </div>
              <div className="roadmap__main" data-aos="fade-up">
                <div
                  data-aos-offset={300}
                  data-aos={isMobile ? "fade-left" : "fade-right"}
                  className="roadmap-box left"
                >
                  <div className="time3">
                    {" "}
                    <div className="time2">3rd Quarter 2024 </div>
                  </div>
                  <div className="content">
                    <h5 className="title">Phase 1 </h5>
                    <p className="text">Social Media Launching</p>
                    <p className="text">Website Launching</p>
                    <p className="text">Whitepaper</p>

                    <p className="text">Social Media Marketing</p>
                    <p className="text">Community Growth</p>
                  </div>
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-offset="300"
                  className="roadmap-box right "
                >
                  <div className="time3">
                    {" "}
                    <div className="time2">4th Quarter 2024 </div>
                  </div>
                  <div className="content">
                    <h5 className="title">Phase 2</h5>
                    <p className="text">Audit Report</p>
                    <p className="text">KYC Completion & Doxxed Team </p>
                    <p className="text">Website Final Version</p>

                    <p className="text">1st Phase Presale </p>
                    <p className="text">Beta Grabitshop App Version</p>
                    <p className="text">2nd Phase Presale & launching</p>
                  </div>
                </div>

                <div
                  data-aos={isMobile ? "fade-left" : "fade-right"}
                  className="roadmap-box left"
                >
                  <div className="time3">
                    {" "}
                    <div className="time2">1nd Quarter 2025 </div>
                  </div>
                  <div className="content">
                    <h5 className="title">Phase 3</h5>
                    <p className="text">CG & CMC Listing</p>
                    <p className="text">Final Grabit App Version</p>
                    <p className="text">Launch in Playstore & Appstore</p>
                  </div>
                </div>
                <div data-aos="fade-left" className="roadmap-box right">
                  <div className="time3">
                    {" "}
                    <div className="time2">2nd Quarter 2025 </div>
                  </div>
                  <div className="content">
                    <h5 className="title">Phase 4</h5>
                    <p className="text">
                      Partnership with Worldwide Top Brand and Bring Together
                    </p>
                    <p className="text">Tier 1 Cex Listing </p>
                    <p className="text">More Coming Soon </p>
                  </div>
                </div>
                <div
                  style={{ visibility: "hidden" }}
                  className="roadmap-box"
                ></div>
                <div className="icon" />
                <div className="icon bottom" />
              </div>
              {/* <div className="button">
                <Link href="/roadmap" className="action-btn">
                  <span>View Full Road Map</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Road Map</span>
                </h6>
                <h3 className="heading wow" data-splitting>
                  The Journey of <br />
                  Grabit NFT
                </h3>
              </div>
              <div
                className="roadmap__main"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div
                  data-aos={isMobile ? "fade-left" : "fade-right"}
                  className="roadmap-box"
                >
                  <div className="time">3rd Quarter2024</div>
                  <div className="content">
                    <h5 className="title">Phase 1 </h5>
                    <p className="text">Social Media Launching</p>
                    <p className="text">Website Launching</p>
                    <p className="text">Whitepaper</p>

                    <p className="text">Social Media Marketing</p>
                    <p className="text">Community Growth</p>
                  </div>
                </div>
                <div
                  className="roadmap-box right "
                  data-aos={isMobile ? "fade-left" : "fade-left"}
                >
                  <div className="time">4th Quarter2024</div>
                  <div className="content">
                    <h5 className="title">Phase 2</h5>
                    <p className="text">Audit Report</p>
                    <p className="text">KYC Completion & Doxxed Team </p>
                    <p className="text">Website Final Version</p>

                    <p className="text">1st Phase Presale </p>
                    <p className="text">Beta Grabitshop App Version</p>
                    <p className="text">2nd Phase Presale & launching</p>
                  </div>
                </div>
                <div
                  className="roadmap-box"
                  data-aos={isMobile ? "fade-left" : "fade-right"}
                >
                  <div className="time">1st Quarter2025</div>
                  <div className="content">
                    <h5 className="title">Phase 3</h5>
                    <p className="text">CG & CMC Listing</p>
                    <p className="text">Final Grabit App Version</p>
                    <p className="text">Launch in Playstore & Appstore</p>
                  </div>
                </div>
                <div
                  className="roadmap-box right"
                  data-aos={isMobile ? "fade-left" : "fade-left"}
                >
                  <div className="time">2nd Quarter2025 </div>
                  <div className="content">
                    <h5 className="title">Phase 4</h5>
                    <p className="text">
                      Partnership with Worldwide Top Brand and Bring Together
                    </p>
                    <p className="text">Tier 1 Cex Listing </p>
                    <p className="text">More Coming Soon </p>
                  </div>
                </div>
                <div
                  style={{ visibility: "hidden" }}
                  className="roadmap-box"
                ></div>
                <div className="icon" />
                <div className="icon bottom" />
              </div>
              <div className="button">
                <Link href="/roadmap" className="action-btn">
                  <span>View Full Road Map</span>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
