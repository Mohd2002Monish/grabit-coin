import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";
export default function Roadmap() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
      easing: "ease-in",
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Road Map">
        <div className="page-roadmap">
          <section className="roadmap">
            <div className="container">
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
                  <div className="roadmap__main" data-aos="fade-up">
                    <div
                      data-aos-offset={300}
                      data-aos={isMobile ? "fade-left" : "fade-right"}
                      className="roadmap-box left"
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

                    <div data-aos="fade-left" className="roadmap-box right ">
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
                      data-aos={isMobile ? "fade-left" : "fade-right"}
                      className="roadmap-box left"
                    >
                      <div className="time">1st Quarter2025</div>
                      <div className="content">
                        <h5 className="title">Phase 3</h5>
                        <p className="text">CG & CMC Listing</p>
                        <p className="text">Final Grabit App Version</p>
                        <p className="text">Launch in Playstore & Appstore</p>
                      </div>
                    </div>
                    <div data-aos="fade-left" className="roadmap-box right">
                      <div className="time">2nd Quarter2025 </div>
                      <div className="content">
                        <h5 className="title">Phase 4</h5>
                        <p className="text">
                          Partnership with Worldwide Top Brand and Bring
                          Together
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
            </div>
          </section>
          {/* <section className="project s2">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="block-text center">
                    <h6 className="sub-heading">
                      <span>Our Speciality</span>
                    </h6>
                    <h3 className="heading">Tokenomics</h3>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="project-box">
                    <div className="image">
                      <Link href="/nft">
                        <img src="/assets/images/item/item-02.png" alt="" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/nft" className="h5 title">
                        King Of Pirates
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-box">
                    <div className="image">
                      <Link href="/nft">
                        <img src="/assets/images/item/item-03.png" alt="" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/nft" className="h5 title">
                        Pomeranian Doge
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-box">
                    <div className="image">
                      <Link href="/nft">
                        <img src="/assets/images/item/item-04.png" alt="" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/nft" className="h5 title">
                        Nintendo Switch
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-box">
                    <div className="image">
                      <Link href="/nft">
                        <img src="/assets/images/item/item-05.png" alt="" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/nft" className="h5 title">
                        The Strange Art
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-box">
                    <div className="image">
                      <Link href="/nft">
                        <img src="/assets/images/item/item-06.png" alt="" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/nft" className="h5 title">
                        3D Digital Artwork
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-box">
                    <div className="image">
                      <Link href="/nft">
                        <img src="/assets/images/item/item-07.png" alt="" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/nft" className="h5 title">
                        Pixel Art Addicted
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-box">
                    <div className="image">
                      <Link href="/nft">
                        <img src="/assets/images/item/item-08.png" alt="" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/nft" className="h5 title">
                        3D Digital Artwork
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="faq s3">
            <div className="shape" />
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-12">
                  <div className="block-text">
                    <h6 className="sub-heading">
                      <span>FAQs</span>
                    </h6>
                    <h3 className="heading">
                      Frequently
                      <br />
                      Aksed Questions
                    </h3>
                    <p>
                      Below is a list of frequently asked questions and answers
                      from partners and 3D artist. Please check this FAQ first
                      before contacting us.
                    </p>
                  </div>
                  <Accordion oneCol />
                </div>
                <div className="col-xl-6 col-md-12">
                  <div className="image">
                    <img src="/assets/images/layouts/img-faq.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
