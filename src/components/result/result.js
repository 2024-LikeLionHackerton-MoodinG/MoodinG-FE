import StyledResult from "./StyledRusult";
import resultMoodingImage from "../../lib/images/result-mooding.png";
import StyledResultMoodingImage from "./StyledResultMoodingImage";

const Result = () => {
  return (
    <>
      <StyledResult>
        <StyledResultMoodingImage
          src={resultMoodingImage}
          alt="result mooding img"
        />
      </StyledResult>
    </>
  );
};

export default Result;
