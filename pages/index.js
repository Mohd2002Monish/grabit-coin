import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Banner1 from "@/components/sections/Banner1";
import Create1 from "@/components/sections/Create1";
import Faq1 from "@/components/sections/Faq1";
import Portfolio1 from "@/components/sections/Portfolio1";
import Project1 from "@/components/sections/Project1";
import Roadmap1 from "@/components/sections/Roadmap1";
import Speciality1 from "@/components/sections/Speciality1";
import Team1 from "@/components/sections/Team1";
import Testimonials1 from "@/components/sections/Testimonials1";

import { Element, Link } from "react-scroll";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} big>
        <Element name="home">
          <Banner1 />
        </Element>
        <Element name="about">
          <About1 />
          <Speciality1 />
        </Element>

        <Element name="explore">
          <Portfolio1 />
        </Element>
        <Element name="tokenomics">
          <Project1 />
        </Element>
        <Element name="roadmap">
          <Roadmap1 />
          <Faq1 />
        </Element>
        {/* <Element name="team"><Team1 /></Element> */}
        {/* <Testimonials1 /> */}
      </Layout>
    </>
  );
}
