import React from "react";
import styled from "styled-components";
import Explaination from "./Explaination";

const LoadingContainer = styled.div`
  height: 930;
  width: 100%;
  background: linear-gradient(#ffecb6, #fcf082);
  position: relative;
  overflow: hidden;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Explaination />
    </LoadingContainer>
  );
};

export default Loading;
