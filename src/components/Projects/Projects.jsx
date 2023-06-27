import Item from "./item/Item";
import styled from "styled-components";

import { media } from "../../styled-components/Global";
import { ProjectsObject } from "../../utils/SkillsObject";

const StyledProjects = styled.section`
  margin: 4rem auto;

  h2 {
    font-size: 2.25rem;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${media.tablet} {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;
    }

    ${media.tablet_m} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 2rem;
    }
  }

  ${media.phone} {
    margin: 1rem auto;
  }
`;

const Projects = () => {
  return (
    <StyledProjects>
      <h2>Projects i&apos;ve built</h2>
      <div className="card-container">
        {ProjectsObject.map((project, index) => (
          <Item
            key={index}
            project={project}
          />
        ))}
      </div>
    </StyledProjects>
  );
};

export default Projects;
