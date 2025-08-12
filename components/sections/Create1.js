import Link from "next/link";

export default function Create1() {
  return (
    <>
      <section className="create">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="create__main">
                <div className="content">
                  <h4 className="heading">
                    Become a Pioneer in Virtual Finance
                  </h4>
                  <p>
                    Invest in the Next Generation of AR/VR Currency and Shape
                    the Future of the Metaverse.
                  </p>
                  <Link href="/" className="action-btn">
                    <span>Contact Now</span>
                  </Link>
                </div>
                <img src="/assets/images/layouts/create.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
