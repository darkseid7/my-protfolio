import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimate, useInView, stagger } from "framer-motion";

import { media } from "../../../styled-components/Global";

const StyledItem = styled(motion.li)`
  width: 100%;
  height: 89px;
  padding: 1rem 1.5rem;
  background-color: #1b1a1fcc;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;

  a {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 50px;
      margin-right: 6px;
    }
  }

  ${media.phone} {
    padding: 0.5rem 1rem;

    a {
      font-size: 1rem;
      svg {
        width: 35px;
      }
    }
  }

  /* &:last-child {
        grid-column: span 3 / span 3;
      } */
`;

function Item({ children, url }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    const enterAnimation = () => {
      animate(
        scope.current,
        { opacity: [0, 1], y: [50, 0] },
        { duration: 1, delay: stagger(0.5) }
      );
    };
    enterAnimation();
  }, [isInView]);

  return (
    <StyledItem
      ref={scope}
      whileTap={{ scale: [1.1, 1] }}
      whileHover={{ scale: 1.04 }}
      className="skill"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </StyledItem>
  );
}

export default Item;
