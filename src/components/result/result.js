import { GlobalFontDNF } from "../../lib/fontSetting";
import styled from "styled-components";
import resultMoodingImage from "../../lib/images/result-mooding.png";
import { Wave } from "../common/Wave";

const StyledResultContainer = styled.div`
  width: 430px;
  height: 932px;
  background: linear-gradient(#ffecb6, #fcf082);
  position: relative;
  overflow: hidden;
`;

// StyledResultMoodingImage 컴포넌트 정의
const StyledResultMoodingImage = styled.img`
  position: absolute;
  bottom: 300px;
  left: 45%;
  transform: translateX(-50%);
  width: 200px;
`;

// Result 컴포넌트 정의
const Result = () => {
  return (
    <>
      <GlobalFontDNF />
      <StyledResultContainer>
        <StyledResultMoodingImage
          src={resultMoodingImage}
          alt="result mooding img"
        />
      </StyledResultContainer>
    </>
  );
};

export default Result;