import startMoodingImage from "../../lib/images/start-mooding.png";
import StyledStartButton from "../start/StyledStartButton";
import StyledStartMoodingImage from "./StyledStartMoodingImage";
import StyledStart from "./StyledStart";

const startClick = () => {
  console.log("start");
};

const Start = () => {
  return (
    <>
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
