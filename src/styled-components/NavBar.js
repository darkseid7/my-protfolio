import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: end;
  div {
    height: 32px;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  .social {
    display: flex;
  }
`;
