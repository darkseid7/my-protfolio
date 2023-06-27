import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../../styled-components/Global";

import Profile from "./Profile/Profile";
import Picture from "./Picture/Picture";

const StyledHero = styled(motion.section)`
  max-width: 960px;
  margin: 4rem auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet} {
    width: 100%;
    margin: 0;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <Profile />
      <Picture />
    </StyledHero>
  );
}

export default Hero;
