import frame1 from "../../lib/images/loding1.png";
import frame2 from "../../lib/images/loding2.png";
import { useState, useEffect } from "react";
import styled from "styled-components";

const AnimationContainer = styled.div`
  width: 250px;
  height: 250px;
  left: 50px;
`;

const AnimationImg = styled.img`
  width: 100%;
  height: 100%;
`;

const frames = [frame1, frame2];

const MoodingMotion = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationContainer>
      <AnimationImg src={frames[currentFrame]} alt="Hamster Animation Frame" />
    </AnimationContainer>
  );
};

export default MoodingMotion;
