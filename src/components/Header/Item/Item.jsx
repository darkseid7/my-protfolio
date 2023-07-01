import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../../styled-components/Global";

const StyledItem = styled(motion.a)`
  margin: 0 0.2rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;

  ${media.phone} {
    padding: 0.75rem 0.5rem;
  }
`;

const itemVariants = {
  hover: {
    background: "#FFFFFF",
    color: "#000000",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  noHover: {
    background: "#000000",
  },
};

const Item = ({ children, href }) => {
  return (
    <StyledItem
      href={href}
      variants={itemVariants}
      whileHover="hover"
      initial="noHover"
    >
      {children}
    </StyledItem>
  );
};
export default Item;
