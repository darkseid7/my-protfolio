import styled from "styled-components";
import { media } from "../styled-components/Global";

export const MainContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 1rem;

  ${media.tablet_m} {
    max-width: 46rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 960px;
  margin: 4rem auto;
`;
