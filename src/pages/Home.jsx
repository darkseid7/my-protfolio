import styled from "styled-components";
import { motion } from "framer-motion";

import Separator from "../components/common/Separator";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

import { media } from "../styled-components/Global";

const StyledHome = styled(motion.div)`
  max-width: 1250px;
  margin: 0 auto;
  padding: 1rem;

  ${media.tablet_m} {
    max-width: 46rem;
  }
`;

function Home() {
  return (
    <>
      <StyledHome
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Separator />
        <Card />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <Contact />
      </StyledHome>
    </>
  );
}

export default Home;
