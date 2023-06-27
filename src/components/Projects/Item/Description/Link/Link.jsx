import styled from "styled-components";

import { media } from "../../../../../styled-components/Global";

const StyledLink = styled.div`
  width: 100%;

  .link-styles {
    cursor: pointer;
    border-radius: 9999px;
    border: 2px solid rgb(39, 37, 51);
    background-color: rgb(39, 37, 51);
    padding: 0.5rem 1.25rem;
    color: rgb(249, 250, 251);
    font-weight: 300;
  }

  .card-links {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
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
        justify-content: center;
        margin: 0 0.5rem;

        svg {
          display: flex;
          align-items: center;
          width: 15px;
          margin: 0 0.2rem;
        }

        ${media.phone} {
          font-size: 0.9rem;
        }
      }

      ${media.phone} {
        width: 100%;
        justify-content: space-between;
        margin: 1rem 0;
      }
    }

    ${media.phone} {
      flex-direction: column-reverse;
      align-items: end;
    }
  }

  ${media.phone} {
    margin: 0.5rem 0;
  }
`;

const Link = ({ project }) => {
  const { url, builtWith, created } = project;
  return (
    <StyledLink>
      <div className="card-links">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-styles"
        >
          Visit site
        </a>

        <div className="card-stack">
          <span className="link-styles">{created}</span>
          <span className="link-styles">
            {builtWith.map(({ svg }, index) => (
              <i key={index}>{svg}</i>
            ))}
          </span>
        </div>
      </div>
    </StyledLink>
  );
};

export default Link;
