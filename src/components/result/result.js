import { GlobalFontDNF } from "../../lib/fontSetting";
import styled from "styled-components";
import resultMoodingImage from "../../lib/images/result-mooding.png";


const StyledResult = styled.div`
  width: 430px;
  height: 932px;
  background: linear-gradient(#ffecb6, #fcf082);
  position: relative;
  overflow: hidden;
`;


const StyledResultMoodingImage = styled.img`
  position: absolute;
  bottom: 300px;
  left: 45%;
  transform: translateX(-50%);
  width: 200px;
`;

const Result = () => {
  return (
    <>
      <GlobalFontDNF />
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
