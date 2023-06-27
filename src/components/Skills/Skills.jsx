import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimate, useInView } from "framer-motion";

import { media } from "../../styled-components/Global";
import { SkillsObject } from "../../utils/SkillsObject";

import Item from "./Item/Item";

const StyledSkills = styled.section`
  max-width: 960px;
  margin: 4rem auto;

  h2 {
    font-size: 2.25rem;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .skills-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 1.5rem;

    ${media.tablet_s} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${media.phone} {
      margin: 1rem auto;
      gap: 0.6rem;
    }
  }

  ${media.phone} {
    margin: 1rem auto;
  }
`;

function Skills() {
  const [scope, animate] = useAnimate();
  const isInview = useInView(scope, { once: false });

  useEffect(() => {
    const enterAnimation = () => {
      if (isInview) {
        animate("h2", { opacity: [0, 1] }, { duration: 1 });
      }
    };

    enterAnimation();
  }, [isInview]);

  return (
    <StyledSkills ref={scope}>
      <h2>Skills</h2>
      <motion.ul className="skills-container">
        {SkillsObject.map(({ name, svg, url }, index) => (
          <Item
            key={index}
            index={index}
            url={url ? url : ""}
          >
            {svg}
            {name}
          </Item>
        ))}
      </motion.ul>
    </StyledSkills>
  );
}

export default Skills;
