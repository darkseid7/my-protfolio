import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../styled-components/Global";

import { NavBar, Logo, Items } from "../styled-components/NavBar";
import { ReactComponent as NavLogo } from "../assets/react.svg";
import { ReactComponent as GitLogo } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Codepen } from "../assets/codepen.svg";

import Item from "./Item";

const StyledHeader = styled.header`
  width: 100%;
  height: 90px;
  padding: 1rem;
  display: flex;

  .social {
    margin-right: 1rem;
    svg {
      width: 25px;
      margin: 0 0.5rem;
      cursor: pointer;

      path {
        fill: white;
      }
    }

    ${media.tablet_s} {
      display: none;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <NavBar>
        <Logo>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <NavLogo />
          </motion.div>
          <span>.dev</span>
        </Logo>
        <Items>
          <motion.div className="social">
            <motion.span whileHover={{ scale: 0.9 }}>
              <a
                href="https://github.com/darkseid7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitLogo />
              </a>
            </motion.span>

            <motion.span whileHover={{ scale: 0.9 }}>
              <a
                href="https://www.linkedin.com/in/sergio-andr%C3%A9s-oquendo-salazar-111b1318a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </motion.span>
            <motion.span whileHover={{ scale: 0.9 }}>
              <a
                href="https://codepen.io/andr-s-oquendo-salazar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Codepen />
              </a>
            </motion.span>
          </motion.div>
          <Item>Projects</Item>
          <Item>About</Item>
          <Item>Contact</Item>
        </Items>
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
