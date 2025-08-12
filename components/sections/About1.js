import Link from "next/link";

export default function About1() {
  return (
    <>
      <section className="about">
        <div className="shape" />
        <div className="container">
          <div className="row rev">
            <div className="col-xl-6 col-md-12">
              <div className="about__right">
                <div className="images">
                  <img
                    className="img1"
                    src="/assets/images/layouts/banner-05.png"
                    alt=""
                  />
                  <img
                    className="img2"
                    src="/assets/images/layouts/banner-02.png"
                    alt=""
                  />
                  <img
                    className="img3"
                    src="/assets/images/layouts/banner-01.png"
                    alt=""
                  />
                  <img
                    className="img4"
                    src="/assets/images/layouts/banner-04.png"
                    alt=""
                  />
                  <img
                    className="img5"
                    src="/assets/images/layouts/banner-03.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h6 className="sub-heading">
                  <span>About us</span>
                </h6>
                <h3 className="heading wow" data-splitting>
                  Welcome to <br /> GrabIT Shop
                </h3>
                <p className="mb-17">
                  where we’re revolutionizing the shopping experience!
                </p>
                <p className="mb-17">
                  Unlike traditional shopping, GrabIT Shop introduces an
                  entirely new way of shopping. You can interact with products
                  in detail and pay with various methods, including
                  cryptocurrencies. So, Get ready to experience shopping like
                  never before!
                </p>
                <h6 className="aboutHeading">Vision</h6>
                <p className="mb-26">
                  Our vision is to create an exceptional shopping experience
                  where users can explore virtual stores, try on items
                  digitally, and make payments seamlessly with cryptocurrencies.
                </p>
                <h6 className="aboutHeading">Mission</h6>
                <p className="mb-26">
                  Our mission is to redefine how consumers interact with brands
                  and products by creating a platform that makes shopping more
                  engaging, immersive, and accessible to everyone, anywhere in
                  the world.{" "}
                </p>
                {/* <Link href="/" className="action-btn">
                  <span>More About Us</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
