import Link from "next/link";

export default function Banner1() {
  return (
    <>
      <section className="banner">
        <div className="shape right" />
        <div className="container big">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="banner__left">
                <div className="block-text">
                  <h2 className="heading">
                    Get ready to experience
                    <span
                      style={{ marginLeft: "7px" }}
                      className="s1 arlo_tm_animation_text_word"
                    >
                      shopping
                    </span>{" "}
                    like never before!
                  </h2>
                  <p className="desc">
                    Our platform combines Augmented Reality (AR), Virtual
                    Reality (VR), and blockchain technology to offer something
                    truly unique.{" "}
                  </p>
                  <Link href="/" className="action-btn">
                    <span>Get Connected</span>
                  </Link>
                </div>
                <div className="pay">
                  {/* <h6>We are Monteno NFT</h6> */}
                  <div className="list">
                    <p>We accept:</p>
                    <ul>
                      <li>
                        <Link href="#">
                          <span className="icon-logo-01" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="icon-logo-02" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="icon-logo-03" />
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="#">
                          <span className="icon-logo-04" />
                        </Link>
                      </li>
                      <li> */}
                      {/* <Link href="#">
                          <span className="icon-logo-05">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                            <span className="path4" />
                          </span>
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link href="#">
                          <span className="icon-logo-06" />
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="banner__right">
                <div className="image">
                  <img src="/assets/images/layouts/banner.png" alt="" />
                </div>
                <div className="price">
                  <div className="icon">
                    <img
                      width={"60px"}
                      src="/assets/images/layouts/coinsymbol.png"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <p>Launching Soon</p>
                    <h5> BNB</h5>
                  </div>
                </div>
                <div className="owner">
                  <div className="image">
                    <img
                      src="/assets/images/layouts/grabit-coinLogo.png"
                      alt=""
                    />
                  </div>
                  {/* <div className="content">
                    <h5> </h5>
                    <p></p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
