import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
export default function MobileMenu({ style, isMobileMenu, handleMobileMenu }) {
  return (
    <div style={style}>
      <nav
        id="main-nav-mobi"
        className="main-nav"
        style={{
          opacity: isMobileMenu ? 1 : 0,
          transition: "opacity 0.6s ease",
          display: `${isMobileMenu ? "block" : "none"}`,
        }}
      >
        <ul onClick={handleMobileMenu} id="menu-primary-menu" className="menu">
          <li className="menu-item">
            <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
              Home
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              About
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="explore" smooth={true} duration={500} offset={-70}>
              Explore
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink
              to="tokenomics"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Tokenomics
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="roadmap" smooth={true} duration={500} offset={-70}>
              RoadMap
            </ScrollLink>
          </li>
          <li className="menu-item">
            {/* <ScrollLink to="team" smooth={true} duration={500} offset={-70}>
              Team
            </ScrollLink> */}
          </li>
          <li className="menu-item">
            <ScrollLink
              to="whitepaper"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Whitepaper
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
