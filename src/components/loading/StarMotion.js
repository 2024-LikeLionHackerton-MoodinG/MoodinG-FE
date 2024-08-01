import starIconFrame1 from "../../lib/images/StarIcon.png";
import starIconFrame2 from "../../lib/images/StarIcon_Twinkle.png";
import styled from "styled-components";
import { useState, useEffect } from "react";

const AnimationContainer = styled.div`
  width: 15dvw;
  height: 10.5dvh;
`;

const AnimationImg = styled.img`
  width: 100%;
  height: 100%;
`;

const frames = [starIconFrame1, starIconFrame2];

const StarMotion = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationContainer>
      <AnimationImg src={frames[currentFrame]} alt="Hamster Animation Frame" />
    </AnimationContainer>
  );
};

export default StarMotion;
