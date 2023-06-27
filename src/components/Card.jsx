import { motion } from "framer-motion";
import styled from "styled-components";

import { SubTitle, Text2 } from "../styled-components/Text";
import { ContentContainer } from "../styled-components/Container";

const StyledCard = styled(motion.div)`
  .card-container {
    width: 100%;
    max-width: 960px;
    margin: 4rem auto;
    padding: 3rem;
    /* background: #348f50;
  background: linear-gradient(to right, #348f50, #56b4d3); */

    /* background: #02aab0;
  background: linear-gradient(to right, #00cdac, #02aab0); */

    background: #ff512f;
    background: linear-gradient(to right, #dd2476, #ff512f);
    &:hover {
      transform: scaleX(1.03) scaleY(1.03);
    }

    transition-duration: 0.3s;
    border-radius: 48px;
  }
`;

function Card() {
  return (
    <StyledCard>
      <ContentContainer>
        <div className="card-container">
          <SubTitle>About me</SubTitle>
          <Text2>
            I&apos;m Sergio Oquendo — a Front-End Web Developer from Medellin,
            Colombia.
          </Text2>
          <Text2>
            I stepped into the world of web development a year ago. I always
            wanted to create interactive visual interfaces and solve real-world
            problems with code. Now I&apos;m on my journey to becoming a
            successful web developer. Building websites and web apps, and trying
            to get better with each project.
          </Text2>
          <Text2>
            Before getting into the web, I was in the habit of writing small,
            no-interface apps/scripts to ease my day-to-day life. From
            automating tasks to organizing data.
          </Text2>
          <Text2>
            My goal is to now help others bring their ideas to life.
          </Text2>
        </div>
      </ContentContainer>
    </StyledCard>
  );
}

export default Card;
