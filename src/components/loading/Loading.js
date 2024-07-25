import React from "react";
import styled from "styled-components";
import Explaination from "./Explaination";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Loading = () => {
  return (
    <Container>
      {/* 글쓰기 컴포넌트 자리  */}
      <Explaination motionFinish={true} />
    </Container>
  );
};

export default Loading;
