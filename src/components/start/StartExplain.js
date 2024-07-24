import React, { useEffect, useRef } from "react";
import TypeIt from "typeit";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledStartExplain = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 20px;
  color: #000;
  height: 333px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StartExplain = ({ buttonClick }) => {
  const typeItRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const instance = new TypeIt(typeItRef.current, {
      strings:
        "무딩이에게 당신이 오늘 겪었던 힘든 일이나 안 좋은 일들을 먹여주세요.",
      speed:100,
      waitUntilVisible: true,
      afterComplete: () => {
        setTimeout(()=>{
            navigate("/write");
        },2000);
      },
    });

    instance.go();

    return () => {
      instance.destroy();
    };
  }, [navigate]);

  return (
    <StyledStartExplain>
      <div ref={typeItRef}></div>
    </StyledStartExplain>
  );
};

export default StartExplain;
