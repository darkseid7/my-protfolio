import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../../styled-components/Global";
import ScrollReveal from "../../utils/ScrollReveal";

const StyledContact = styled(motion.a)`
  margin: 4rem auto;
  padding: 2rem;
  display: block;
  text-align: center;
  font-size: 2rem;
  border-radius: 24px;
  background: linear-gradient(
    90deg,
    hsla(333, 100%, 53%, 1) 0%,
    hsla(33, 94%, 57%, 1) 100%
  );

  ${media.phone} {
    margin: 1rem auto;
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  return (
    <ScrollReveal>
      <StyledContact
        id="Contact"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 1.01 }}
        initial={{ scale: 1 }}
        href="mailto:saoquendo5@gmail.com"
        rel="noopener noreferrer"
      >
        Have a project in mind? <br /> Let&apos;s work together
      </StyledContact>
    </ScrollReveal>
  );
};

export default Contact;
