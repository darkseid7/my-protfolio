import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../../../../styled-components/Global";

const StyledPicture = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 3rem;
  background: #02aab0;
  background: linear-gradient(to right, #00cdac, #02aab0);

  ${media.tablet} {
    height: 18rem;
  }

  ${media.tablet_m} {
    height: 20rem;
  }

  ${media.phone} {
    height: 15rem;
    border-radius: 1.5rem;
  }

  img {
    position: absolute;
    top: 2.25rem;
    width: 84%;
    border-radius: 0.5rem;
    object-fit: cover;
    transition-duration: 0.3s;

    ${media.phone} {
      width: 90%;
      top: 1rem;
    }
  }
`;

const Picture = ({ preview }) => {
  const image = {
    rest: { scale: 1 },
    hover: { scale: 1.04 },
  };

  return (
    <StyledPicture className="card-preview">
      <motion.img
        variants={image}
        whileHover="hover"
        src={preview}
        alt={preview}
      />
    </StyledPicture>
  );
};

export default Picture;
