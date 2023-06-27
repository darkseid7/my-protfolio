import styled from "styled-components";
import { motion } from "framer-motion";

import { SubTitle, Text, ProjectTitle } from "../styled-components/Text";
import { media } from "../styled-components/Global";
import { ContentContainer } from "../styled-components/Container";
import { ReactComponent as Tailwind } from "../assets/tailwind.svg";
import { ReactComponent as Js } from "../assets/js.svg";
import { ProjectsObject } from "../utils/SkillsObject";

const StyledProjects = styled.section`
  padding: 1rem;
  > div {
    max-width: unset;
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

    .item-container {
      display: grid;
      grid-template-columns: 28rem 1fr;
      gap: 1rem;

      ${media.tablet} {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        margin-left: auto;
        margin-right: auto;
        border-radius: 3rem;
        padding: 1.5rem;
        background-color: rgb(27, 26, 31);
      }

      .card-preview {
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
          background: #02aab0;
          background: linear-gradient(to right, #00cdac, #02aab0);
        }

        ${media.tablet_m} {
          height: 20rem;
          background: #02aab0;
          background: linear-gradient(to right, #00cdac, #02aab0);
        }

        img {
          position: absolute;
          top: 2.25rem;
          width: 84%;
          border-radius: 0.5rem;
          object-fit: cover;
          transition-duration: 0.3s;
        }
      }

      .card-description {
        border-radius: 3rem;
        background-color: rgb(27, 26, 31);
        padding: 3rem;

        ${media.tablet} {
          padding: 1.5rem 1rem;
        }

        .card-links {
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

          a {
            cursor: pointer;
            border-radius: 9999px;
            border: 2px solid rgb(39, 37, 51);
            background-color: rgb(39, 37, 51);
            padding: 0.5rem 1.25rem;
            color: rgb(249, 250, 251);

            &:hover {
              background-color: transparent;
              color: rgb(249, 250, 251);
            }
          }

          .card-stack {
            display: flex;

            span {
              display: flex;
              align-items: center;
              border-radius: 9999px;
              background-color: rgb(39, 37, 51);
              padding: 0.6rem 1.25rem;
              margin: 0 0.3rem;

              i {
                display: flex;
                align-items: center;
                svg {
                  width: 20px;
                  margin: 0 0.2rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Projects() {
  const project = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    pressed: { scale: 0.95 },
  };

  const image = {
    rest: { scale: 1 },
    hover: { scale: 1.04 },
  };

  return (
    <StyledProjects>
      <ContentContainer>
        <SubTitle>Projects i&apos;ve built</SubTitle>
        <div className="card-container">
          {/* {ProjectsObject.map(
            (
              { name, description, url, builtWith, preview, created },
              index
            ) => (
              <div
                key={index}
                className="item-container"
              >
                <motion.div
                  variants={project}
                  initial="rest"
                  whileHover="hover"
                  whileTap="pressed"
                  className="card-preview"
                >
                  <motion.img
                    variants={image}
                    whileHover="hover"
                    src={preview}
                    alt={name}
                  />
                </motion.div>
                <motion.div
                  variants={project}
                  initial="rest"
                  whileHover="hover"
                  whileTap="pressed"
                  className="card-description"
                >
                  <ProjectTitle>{name}</ProjectTitle>
                  <Text>{description}</Text>
                  <div className="card-links">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site
                    </a>
                    <div className="card-stack">
                      <span>{created}</span>
                      <span>
                        {builtWith.map(({ svg }, index) => (
                          <i key={index}>{svg}</i>
                        ))}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          )} */}

          <div className="item-container">
            <motion.div
              variants={project}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
              className="card-preview"
            >
              <motion.img
                variants={image}
                whileHover="hover"
                src="https://hammad-dev.netlify.app/img/projects/prima.jpg"
                alt=""
              />
            </motion.div>
            <motion.div
              variants={project}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
              className="card-description"
            >
              <ProjectTitle>Prima</ProjectTitle>
              <Text>
                Prima was my first ever work with a client. My task was to
                create a visually elegent yet simple website that captured the
                essence of my client&apos;s brand while delivering a smooth user
                experience. I had to come up with the design and colors. And on
                the code side, I got to experiment with the multipage
                functionality on a single page.
              </Text>
              <div className="card-links">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site
                </a>
                <div className="card-stack">
                  <span>March 2023</span>
                  <span>
                    <Tailwind fill="#07b6d5" />
                    <Js fill=" #f7d800" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ContentContainer>
    </StyledProjects>
  );
}

export default Projects;
