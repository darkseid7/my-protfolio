import React from "react";
import styled from "styled-components";

const StyledSeparator = styled.div`
  height: 0.5rem;
  width: 100%;
  border-radius: 9999px;
  background-color: rgb(27, 26, 31);
`;

function Separator() {
  return <StyledSeparator />;
}

export default Separator;
