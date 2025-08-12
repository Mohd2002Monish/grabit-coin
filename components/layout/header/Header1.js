import Link from "next/link";
import MobileMenu from "../MobileMenu";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  big,
}) {
  return (
    <>
      <header
        id="header_main"
        className={`header ${scroll ? "is-fixed is-small" : ""}`}
      >
        <div className={`container ${big ? "big" : ""}`}>
          <div className="row">
            <div className="col-12">
              <div className="header__body">
                <div className="header__logo">
                  <Link href="/">
                    <img
                      id="site-logo"
                      src="/assets/images/logo/logo.png"
                      alt="Peson"
                      data-retina="assets/images/logo/logo@2x.png"
                      data-width={160}
                      data-height={38}
                    />
                  </Link>
                </div>
                <div className="header__right">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item">
                        <ScrollLink
                          className="scrollLink"
                          to="home"
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass="activeScrollLink"
                          spy={true}
                        >
                          Home
                        </ScrollLink>
                      </li>

                      <li className="menu-item">
                        <ScrollLink
                          className="scrollLink"
                          to="about"
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass="activeScrollLink"
                          spy={true}
                        >
                          About
                        </ScrollLink>
                      </li>
                      <li className="menu-item">
                        <ScrollLink
                          className="scrollLink"
                          to="explore"
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass="activeScrollLink"
                          spy={true}
                        >
                          Explore
                        </ScrollLink>
                      </li>
                      <li className="menu-item">
                        <ScrollLink
                          className="scrollLink"
                          to="tokenomics"
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass="activeScrollLink"
                          spy={true}
                        >
                          Tokenomics
                        </ScrollLink>
                      </li>
                      <li className="menu-item">
                        <ScrollLink
                          className="scrollLink"
                          to="roadmap"
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass="activeScrollLink"
                          spy={true}
                        >
                          RoadMap
                        </ScrollLink>
                      </li>
                      {/* <li className="menu-item">
                        <ScrollLink
                          to="team"
                          smooth={true}
                          duration={500}
                          offset={-70}
                        >
                          Team
                        </ScrollLink>
                      </li> */}
                      <li className="menu-item">
                        <ScrollLink
                          className="scrollLink"
                          to="whitepaper"
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass="activeScrollLink"
                          spy={true}
                        >
                          Whitepaper
                        </ScrollLink>
                      </li>
                    </ul>
                  </nav>
                  <div className="mobile-button" onClick={handleMobileMenu}>
                    <span />
                  </div>
                </div>
                <div className="header__action"></div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isMobileMenu={isMobileMenu}
        />
      </header>
    </>
  );
}
