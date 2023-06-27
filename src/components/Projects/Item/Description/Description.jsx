import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../../../../styled-components/Global";

import Link from "./Link/Link";

const StyledDescription = styled(motion.div)`
  border-radius: 3rem;
  background-color: rgb(27, 26, 31);
  padding: 3rem;

  ${media.tablet} {
    padding: 1.5rem 1rem;
  }
  ${media.phone} {
    padding: 0;
  }

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    text-transform: capitalize;
  }

  p {
    font-weight: 300;
    line-height: 1.4;
  }
`;

const Description = ({ project }) => {
  const { name, description } = project;
  const projectAnimate = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    pressed: { scale: 0.95 },
  };

  return (
    <StyledDescription
      variants={projectAnimate}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >
      <h3>{name}</h3>
      <p>{description}</p>
      <Link project={project} />
    </StyledDescription>
  );
};

export default Description;
