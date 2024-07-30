import React from "react";
import styled from "styled-components";
import Explaination from "./Explaination";
import { Wave } from "../common/Wave";

const LoadingContainer = styled(Wave)`
  height: 850px;
  width: 100%;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Explaination motionFinish={true} />
    </LoadingContainer>
  );
};

export default Loading;
