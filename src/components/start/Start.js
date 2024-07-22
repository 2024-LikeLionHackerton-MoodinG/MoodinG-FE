import styled from "styled-components";
import startMoodingImage from "../../lib/images/start-mooding.png";
import startbuttonImage from "../../lib/images/startbutton.png";

const StyledStart = styled.div`
  width: 430px;
  height: 600px;
  background: linear-gradient(#ffecb6, #fcf082);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 100"><path d="M0,80 Q107.5,40 215,80 T430,80 L430,100 L0,100 Z" fill="white"/></svg>')
      no-repeat bottom;
    background-size: cover;
  }
`;

const StartmoodingImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StartButtonContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  height: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartButtonImage = styled.img`
  width: 100%;
  height: auto;
`;

const StartButtonText = styled.span`
  position: absolute;
  color: black;
  font-size: 35px;
  font-weight: bold;
  pointer-events: none;
`;

const Start = () => {
  return (
    <>
      <StyledStart>
        <StartmoodingImage src={startMoodingImage} alt="start mooding img" />
      </StyledStart>
      <StartButtonContainer>
        <StartButtonImage src={startbuttonImage} alt="start button" />
        <StartButtonText>시작 하기</StartButtonText>
      </StartButtonContainer>
    </>
  );
};

export default Start;
