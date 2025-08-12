import { useState } from "react";
export default function Accordion({ oneCol }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div
        className="faq__main flat-tabs"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <ul className="menu-tab">
          <li
            onClick={() => handleOnClick(1)}
            className={activeIndex === 1 ? "active" : ""}
          >
            <h6 className="fs-14">Platform Overview</h6>
          </li>
          <li
            onClick={() => handleOnClick(2)}
            className={activeIndex === 2 ? "active" : ""}
          >
            {" "}
            <h6 className="fs-14">Blockchain Integration</h6>
          </li>
          <li
            onClick={() => handleOnClick(3)}
            className={activeIndex === 3 ? "active" : ""}
          >
            <h6 className="fs-14">User Experience</h6>
          </li>
          <li
            onClick={() => handleOnClick(4)}
            className={activeIndex === 4 ? "active" : ""}
          >
            <h6 className="fs-14">Tokenomics & Roadmap</h6>
          </li>
        </ul>
        <div className="content-tab">
          <div
            className="content-inner"
            style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}
          >
            <div className="flat-accordion row">
              <div
                className={`col-md-6 ${oneCol ? "col-md-12" : "col-sm-12"} `}
              >
                <div
                  className={
                    isActive.key == 1 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(1)}
                >
                  <h6
                    className={
                      isActive.key == 1 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span> 01. What is Grabit Shop?</span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Shop is a next-generation shopping platform that
                      combines Augmented Reality (AR), Virtual Reality (VR), and
                      blockchain technology to offer an immersive, interactive
                      shopping experience. Users can explore virtual showrooms,
                      interact with products as if they were in a physical
                      store, and purchase items using various payment methods,
                      including cryptocurrencies.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 2 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(2)}
                >
                  <h6
                    className={
                      isActive.key == 2 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span>
                      02. How does Grabit Shop enhance the traditional shopping
                      experience?{" "}
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Shop provides an immersive experience where users
                      can walk through virtual showrooms, examine products from
                      all angles, and even visualize how items would look in
                      their personal space. This interactive environment
                      replicates the in-store experience while offering the
                      convenience of online shopping.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-md-6 ${oneCol ? "col-md-12" : "col-sm-12"} `}
              >
                <div
                  className={
                    isActive.key == 3 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(3)}
                >
                  <h6
                    className={
                      isActive.key == 3 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span>
                      03. What is the difference between the Immersive Showroom
                      Experience and Personal Virtual Space?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      The Immersive Showroom Experience allows users to explore
                      and interact with products in a virtual store setting,
                      similar to visiting a physical showroom. The Personal
                      Virtual Space, on the other hand, is a customizable
                      digital area where users can store, organize, and interact
                      with their purchased items, such as trying on clothes or
                      arranging furniture.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 4 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(4)}
                >
                  <h6
                    className={
                      isActive.key == 4 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span>04. Who is the target audience for Grabit Shop?</span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Shop is designed for tech-savvy consumers, online
                      shoppers looking for a more engaging experience, and
                      cryptocurrency enthusiasts. It's ideal for anyone who
                      values a blend of convenience, technology, and immersive
                      shopping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-inner"
            style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}
          >
            <div className="flat-accordion row">
              <div
                className={`col-md-6 ${oneCol ? "col-md-12" : "col-sm-12"} `}
              >
                <div
                  className={
                    isActive.key == 5 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(5)}
                >
                  <h6
                    className={
                      isActive.key == 5 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span>
                      01. How does Grabit Shop use blockchain technology?{" "}
                    </span>{" "}
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 5 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Shop integrates blockchain technology to ensure
                      secure, transparent, and decentralized transactions. This
                      technology provides a tamper-proof record of all purchases
                      and enhances user trust in the platform by protecting
                      their data.
                    </p>
                  </div>
                </div>

                <div
                  className={
                    isActive.key == 6 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(6)}
                >
                  <h6
                    className={
                      isActive.key == 6 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span>
                      02. What is Grabit Coin, and how does it function within
                      the platform?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 6 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Coin is the native cryptocurrency of the Grabit
                      Shop platform. It facilitates transactions, enables users
                      to earn rewards, and unlocks exclusive features within the
                      ecosystem. Grabit Coin also plays a key role in the
                      platform’s reward and incentive programs.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-md-6 ${oneCol ? "col-md-12" : "col-sm-12"} `}
              >
                <div
                  className={
                    isActive.key == 7 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(7)}
                >
                  <h6
                    className={
                      isActive.key == 7 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span>
                      03. Can users make payments using other currencies?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 7 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Can users make payments using other currencies?** Yes,
                      Grabit Shop supports multiple currencies, including both
                      fiat and cryptocurrencies. This multi-currency support
                      ensures that users can transact using the payment method
                      they prefer, making the platform accessible to a global
                      audience.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 8 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(8)}
                >
                  <h6
                    className={
                      isActive.key == 8 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span>
                      04. Why is blockchain integration important for Grabit
                      Shop?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 8 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Blockchain integration provides a secure and transparent
                      framework for all transactions, ensuring that users’ data
                      is protected and that transactions are tamper-proof. It
                      also enables the use of Grabit Coin, which enhances the
                      platform's functionality and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-inner"
            style={{ display: `${activeIndex == 3 ? "block" : "none"}` }}
          >
            <div className="flat-accordion row">
              <div
                className={`col-md-6 ${oneCol ? "col-md-12" : "col-sm-12"} `}
              >
                <div
                  className={
                    isActive.key == 9 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(9)}
                >
                  <h6
                    className={
                      isActive.key == 9 ? "toggle-title active" : "toggle-title"
                    }
                  >
                    <span>
                      01. What kind of products can users purchase on Grabit
                      Shop?{" "}
                    </span>{" "}
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 9 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Users can purchase a wide range of products, including
                      fashion, electronics, home goods, and more. The platform
                      partners with various brands to offer a diverse selection
                      of items that can be explored in virtual showrooms.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 10 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(10)}
                >
                  <h6
                    className={
                      isActive.key == 10
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      02. How does AR enhance the shopping experience on Grabit
                      Shop?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 10 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      How does AR enhance the shopping experience on Grabit
                      Shop?** Augmented Reality (AR) allows users to visualize
                      how products will look in their real-world environment.
                      For example, users can try on clothes virtually or see how
                      a piece of furniture fits in their home, providing a more
                      informed and confident shopping decision.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-md-6 ${oneCol ? "col-md-12" : "col-sm-12"} `}
              >
                <div
                  className={
                    isActive.key == 11 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(11)}
                >
                  <h6
                    className={
                      isActive.key == 11
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>03. What is the VR showroom experience like?</span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 11 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      The VR showroom experience is highly immersive, allowing
                      users to navigate through virtual stores, interact with
                      products as if they were physically present, and make
                      purchases based on a realistic preview. This experience
                      closely mimics the feeling of shopping in a physical
                      store.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 12 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(12)}
                >
                  <h6
                    className={
                      isActive.key == 12
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      04. How does the Personal Virtual Space benefit users?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 12 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      The Personal Virtual Space allows users to store,
                      organize, and interact with their purchased items. This
                      space is customizable, offering users the ability to
                      revisit their purchases, try on items, or showcase them in
                      different settings, enhancing the overall user experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-inner"
            style={{ display: `${activeIndex == 4 ? "block" : "none"}` }}
          >
            <div className="flat-accordion row">
              <div
                className={`col-md-6 ${oneCol ? "col-md-12" : "col-sm-12"} `}
              >
                <div
                  className={
                    isActive.key == 13 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(13)}
                >
                  <h6
                    className={
                      isActive.key == 13
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>01. How will Grabit Coins be distributed?</span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 13 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Coins will be allocated across several key areas,
                      including early investors, the development team, marketing
                      efforts, and community rewards. The distribution is
                      designed to support the platform’s growth and ensure
                      long-term sustainability.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 14 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(14)}
                >
                  <h6
                    className={
                      isActive.key == 14
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      02. What incentives are available for Grabit Shop users?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 14 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Users can earn Grabit Coins through various activities on
                      the platform, such as making purchases, referring friends,
                      and participating in platform events. These rewards can be
                      used for future purchases or traded on supported
                      exchanges.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 15 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(15)}
                >
                  <h6
                    className={
                      isActive.key == 15
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      03. What are the key milestones in the Grabit Shop
                      roadmap?{" "}
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 15 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      The Grabit Shop roadmap includes the development of the
                      AR/VR platform, the beta launch with select brands, the
                      full platform launch with multi-currency support, and the
                      introduction of Grabit Coin. Each phase is designed to
                      expand the platform’s capabilities and user base.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 16 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(16)}
                >
                  <h6
                    className={
                      isActive.key == 16
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      04. When will Grabit Coin be available to the public?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 16 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Coin will be introduced during Phase 2 of the
                      roadmap, following the full launch of the Grabit Shop
                      platform. This phase will also include integration with
                      external cryptocurrency exchanges, allowing users to trade
                      Grabit Coins.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-md-6 ${oneCol ? "col-md-12" : "col-sm-12"} `}
              >
                <div
                  className={
                    isActive.key == 17 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(17)}
                >
                  <h6
                    className={
                      isActive.key == 17
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      05. How does Grabit Shop plan to sustain long-term growth?
                    </span>{" "}
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 17 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Shop plans to sustain long-term growth by
                      continuously enhancing platform features, expanding brand
                      partnerships, and growing its user base. The platform’s
                      innovative use of AR, VR, and blockchain technology
                      positions it for sustained success in the evolving retail
                      landscape.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 18 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(18)}
                >
                  <h6
                    className={
                      isActive.key == 18
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      06. How will Grabit Shop expand its brand ecosystem?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 18 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Grabit Shop will expand its brand ecosystem by partnering
                      with a diverse range of brands and retailers, offering
                      users an ever-growing selection of products. This
                      expansion will also include adding new features and
                      functionalities to enhance the shopping experience.
                    </p>
                  </div>
                </div>

                <div
                  className={
                    isActive.key == 19 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(19)}
                >
                  <h6
                    className={
                      isActive.key == 19
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      07. What role does the community play in the Grabit Shop
                      ecosystem?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 19 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      The community plays a vital role in the Grabit Shop
                      ecosystem. Users are encouraged to engage with the
                      platform, provide feedback, and participate in events. The
                      platform’s reward system is designed to incentivize active
                      community participation, fostering a vibrant and engaged
                      user base.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isActive.key == 20 ? "flat-toggle active" : "flat-toggle"
                  }
                  onClick={() => handleToggle(20)}
                >
                  <h6
                    className={
                      isActive.key == 20
                        ? "toggle-title active"
                        : "toggle-title"
                    }
                  >
                    <span>
                      08. What future developments can users expect from Grabit
                      Shop?
                    </span>
                    <span className="icon-plus" />
                  </h6>
                  <div
                    className="toggle-content"
                    style={{
                      display: `${isActive.key == 20 ? "block" : "none"}`,
                    }}
                  >
                    <p>
                      Future developments for Grabit Shop include the
                      introduction of new AR/VR features, expanded payment
                      options, and additional brand partnerships. The platform
                      will continue to innovate, offering users an increasingly
                      immersive and convenient shopping experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
