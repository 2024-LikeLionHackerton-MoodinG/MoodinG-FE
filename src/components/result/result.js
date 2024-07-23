import { GlobalFontDNF } from "../../lib/fontSetting";
import styled from "styled-components";
import resultMoodingImage from "../../lib/images/result-mooding.png";
import answerballon from "../../lib/images/answerballon.png";

const ResultContainer = styled.div`
  width: 430px;
  height: 932px;
  background: linear-gradient(#ffecb6, #fcf082);
  overflow: hidden;
`;

// StyledResultMoodingImage 컴포넌트 정의
const ResultMoodingImage = styled.img`
  position: relative;
  transform: translate(65px, 50px);
  width: 300px;
`;

const AnswerBallon = styled.img`
  position: relative;
  transform: translate(15px, 30px);
  width: 400px;
`;

const ButtonBar = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 80px;
  gap: 50px;
`;

const Button = styled.button`
  color: white;
  border: 3px solid black;
  font-size: 25px;
  background-color: black;
  font-family: "DNFBitBitv2", sans-serif;
  border-radius: 20px;
  height: 50px;
  width: 150px;
  cursor: pointer;
  transition: background-color 0.1s;

  &:active {
    border-width: 4px;
    background-color: #fafaa0;
    opacity: 75%;
  }
  box-shadow: 2px 2px 2px;
`;

const Result = () => {
  return (
    <>
      <GlobalFontDNF />
      <ResultContainer>
        <AnswerBallon src={answerballon} alt="answer ballon"></AnswerBallon>
        <ResultMoodingImage
          src={resultMoodingImage}
          alt="result mooding img"
        />

        <ButtonBar>
          <Button>1</Button>
          <Button>2</Button>
        </ButtonBar>
      </ResultContainer>
    </>
  );
};

export default Result;
