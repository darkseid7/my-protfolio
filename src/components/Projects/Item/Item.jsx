import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimate, useInView, stagger } from "framer-motion";

import { media } from "../../../styled-components/Global";

import Picture from "./Picture/Picture";
import Description from "./Description/Description";

const StyledItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 28rem 1fr;
  gap: 1rem;

  ${media.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-left: auto;
    margin-right: auto;
    border-radius: 3rem;
    padding: 1.5rem;
    background-color: rgb(27, 26, 31);
  }

  ${media.phone} {
    padding: 1rem;
    border-radius: 2rem;
    gap: 1rem;
  }
`;

const Item = ({ project, index }) => {
  const { preview } = project;
  const [scope, animate] = useAnimate();
  const isInview = useInView(scope, { once: true });

  useEffect(() => {
    const enterAnimate = () => {
      if (isInview) {
        animate(
          scope.current,
          {
            y: [50, 0],
            opacity: [0, 1],
          },
          { duration: 1, delay: stagger(0.5) }
        );
      }
    };
    enterAnimate();
  }, [isInview]);

  return (
    <StyledItem
      ref={scope}
      key={index}
    >
      <Picture preview={preview} />
      <Description project={project} />
    </StyledItem>
  );
};

export default Item;
