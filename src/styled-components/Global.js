import { createGlobalStyle } from "styled-components";

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;
export const media = {
  desktop_m: customMediaQuery(1200),
  tablet: customMediaQuery(1024),
  tablet_m: customMediaQuery(940),
  tablet_s: customMediaQuery(800),
  phone: customMediaQuery(650),
};

export const GlobalStyles = createGlobalStyle`
* {
  
}
`;
