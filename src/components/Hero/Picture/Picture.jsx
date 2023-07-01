import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import avatarImg from "../../../assets/me.jpg";
import { media } from "../../../styled-components/Global";
import { useTablet } from "../../../hooks/useMediaQuery";

const StyledPicture = styled(motion.div)`
  width: 320px;
  height: 320px;

  background: #02aab0;
  background: linear-gradient(to right, #00cdac, #02aab0);

  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    border-image: linear-gradient(to right, #00cdac, #02aab0);
    /* border-width: 2px; */
    /* border-radius: 52px; */
    /* border-style: solid; */
  }

  ${media.tablet} {
  }
`;

function Picture() {
  const isTablet = useTablet();

  const variants = isTablet
    ? {
        animate: {
          opacity: 1,
          scale: 1,
          x: 0,
          borderRadius: "50%",
        },
        transition: {
          duration: 0.5,
        },
        initial: {
          opacity: 1,
          scale: 1,
          width: "220px",
          height: "220px",
        },
      }
    : {
        animate: {
          opacity: 1,
          // scale: 1,
          x: 0,
        },
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        },
        initial: {
          opacity: 0,
          // scale: 1,
          x: 300,
          borderRadius: "52px",
        },
      };

  return (
    <StyledPicture
      variants={variants}
      initial="initial"
      animate="animate"
      // transition="transition"
      key={isTablet}
    >
      <motion.img
        src={avatarImg}
        // initial={{ y: -220, borderRadius: "50%" }}
        // animate={{ y: 0 }}
        // transition={{ duration: 3 }}
        alt=""
      />
    </StyledPicture>
  );
}

export default Picture;
