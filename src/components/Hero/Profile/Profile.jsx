import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../../../styled-components/Global";
import { ReactComponent as GitLogo } from "../../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../../assets/linkedin.svg";
import { ReactComponent as Codepen } from "../../../assets/codepen.svg";

import Item from "../../Item";

const StyledProfile = styled.div`
  max-width: 580px;

  p {
    font-size: 1rem;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 900;

    span {
      background: linear-gradient(135deg, #dd2476, #ff512f);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .social {
    margin: 1rem;
    display: none;

    svg {
      width: 25px;
      margin: 0 0.5rem;
      cursor: pointer;

      path {
        fill: white;
      }
    }

    ${media.tablet_s} {
      display: block;
    }
  }

  ${media.tablet} {
    text-align: center;

    padding: 2rem 0;
    h1 {
      font-size: 3.5rem;
      line-height: 4.5rem;
      padding-bottom: 0.5rem;
    }
  }

  ${media.phone} {
    h1 {
      font-size: 2.25rem;
      line-height: 3rem;
    }
  }
`;

function Profile() {
  return (
    <>
      <StyledProfile>
        <p>Hi, I&apos;m Sergio</p>
        <h1>
          <span>Front-End</span> <br />
          Web Developer
        </h1>
        <p>
          who loves building interactive and dynamic websites. I bring ideas to
          life through my passion for coding.
        </p>

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
      </StyledProfile>
    </>
  );
}

export default Profile;
