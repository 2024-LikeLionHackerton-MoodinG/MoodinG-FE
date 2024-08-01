import styled from "styled-components";
import { useState, useEffect } from "react";

const SubExplainTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubExplainTextStyle = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 50px;
  font-weight: bold;
  background: linear-gradient(#fcc101, #f26804);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const SubExplain = () => {
  const texts = ["소화중 ", "소화중. ", "소화중. .", "소화중. . ."];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <SubExplainTextContainer>
      <SubExplainTextStyle>{texts[currentTextIndex]}</SubExplainTextStyle>
    </SubExplainTextContainer>
  );
};

export default SubExplain;
