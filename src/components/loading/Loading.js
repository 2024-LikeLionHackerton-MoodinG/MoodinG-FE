import React, { useState } from "react";
import styled from "styled-components";
import MovingPaper from "./MovingPaper";
import Explaination from "./Explaination";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Loading = () => {
  const [animeDone,setAnimeDone] = useState(false);
  return (
    <Container>
      <MovingPaper setAnimeDone={setAnimeDone}/>
      <Explaination animeDone={animeDone}/>
    </Container>
  );
};

export default Loading;
