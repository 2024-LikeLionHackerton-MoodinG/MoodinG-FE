import React, { useEffect, useRef } from "react";
import TypeIt from "typeit";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledStartExplain = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 20px;
  color: #000;
  height: 30dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

const ExplainDiv = styled.div`
  width: 88%;
`;

const StartExplain = () => {
  const typeItRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const instance = new TypeIt(typeItRef.current, {
      strings:
        "무딩이에게 당신이 오늘 겪었던 힘든 일이나 안 좋은 일들을 먹여주세요.",
      speed: 100,
      waitUntilVisible: false,
      afterComplete: () => {
        setTimeout(() => {
          navigate("/write");
        }, 2000);
      },
    });

    instance.go();

    return () => {
      instance.destroy();
    };
  }, [navigate]);

  return (
    <StyledStartExplain>
      <ExplainDiv ref={typeItRef}></ExplainDiv>
    </StyledStartExplain>
  );
};

export default StartExplain;
