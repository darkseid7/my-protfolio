import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../../styled-components/Global";
import ScrollReveal from "../../utils/ScrollReveal";

const StyledCard = styled(motion.div)`
  max-width: 960px;
  margin: 4rem auto;
  transition-duration: 0.3s;

  .card-container {
    width: 100%;
    transition-duration: 0.3s;
    border-radius: 48px;
    padding: 3rem;
    cursor: pointer;
    /* background: #ff512f;
    background: linear-gradient(to right, #dd2476, #ff512f); */
    /* background: #ec008c; /* fallback for old browsers */
    background: linear-gradient(135deg, #dd2476, #ff512f);

    h2 {
      font-size: 2.25rem;
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      font-weight: 300;
    }

    ${media.tablet_s} {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  ${media.phone} {
    margin: 1rem auto;

    .card-container {
      padding: 1.5rem 1.5rem;
      border-radius: 36px;

      p {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

function Card() {
  return (
    <ScrollReveal>
      <StyledCard id="About">
        <motion.div className="card-container">
          <h2>About me</h2>
          <p>
            I&apos;m Sergio — a Front-End Web Developer from Medellin, Colombia.
          </p>

          <p>
            I&apos;m an experienced frontend developer with a strong skill set
            in HTML, CSS, and JavaScript. My focus is on creating visually
            appealing and user-friendly web applications by combining technical
            expertise with intuitive design principles.
          </p>
          <p>
            I&apos;ve worked on diverse projects, collaborating with designers,
            backend developers, and stakeholders to deliver high-quality
            solutions. Attention to detail, code quality, and performance
            optimization are priorities in my work, ensuring functional and
            engaging user experiences.
          </p>
          <p>
            As a lifelong learner, I stay updated on emerging frontend trends
            and technologies, constantly expanding my skill set. I approach
            challenges with a problem-solving mindset, providing innovative
            solutions. I&apos;m excited to bring my expertise to your project
            and collaborate on creating remarkable digital experiences.
          </p>
        </motion.div>
      </StyledCard>
    </ScrollReveal>
  );
}

export default Card;
