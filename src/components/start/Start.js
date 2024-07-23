import styled from "styled-components";
import startMoodingImage from "../../lib/images/start-mooding.png";
import { GlobalFontDNF } from "../../lib/fontSetting";
import { Wave } from "../common/Wave";

const StyledStart = styled(Wave)`
  width: 430px;
  height: 600px;
`;

const StyledStartButton = styled.button`
  position: absolute;
  bottom: 150px;
  color: black;
  border: 3px solid black;
  font-size: 25px;
  background-color: white;
  font-family: "DNFBitBitv2", sans-serif;
  border-radius: 20px;
  min-height: 70px;
  min-width: 340px;
  cursor: pointer;
  transition: background-color 0.1s;
  &:active {
    border-width: 4px;
    background-color: #fafaa0;
    opacity: 75%;
  }
  box-shadow: 2px 2px 2px;
`;

const StyledStartMoodingImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const startClick = () => {
  console.log("start");
};

const Start = () => {
  return (
    <>
      <GlobalFontDNF />
      <StyledStart>
        <StyledStartMoodingImage
          src={startMoodingImage}
          alt="start mooding img"
        />
      </StyledStart>
      <StyledStartButton onClick={startClick}>시작하기</StyledStartButton>
    </>
  );
};

export default Start;
