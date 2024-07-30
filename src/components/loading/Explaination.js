import styled from "styled-components";
import { GlobalFontDNF } from "../../lib/fontSetting";
import trashcan from "../../lib/images/Mooding_trashcan.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MoodingMotion from "./MoodingMotion";

const ExplainationContainer = styled.div``;

const AnimationContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 190px;
  gap: 10px;
`;

const SubExplainDiv = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(#fcc101, #f26804);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const TrashCanContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TrashCanImg = styled.img`
  width: 45px;
  height: 65px;
  margin-right: 10px;
`;

const MoodingWord = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 36px;
`;

const Explaination = ({ motionFinish }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Todo : 추가 로직 구현 -> 로직이 바뀔 수도 있다.
    // 1. localStorage에서 UUID 불러옴
    // 2. 서버로부터 UUID get
    // 3. 비교를 통해 유효성 검사

    if (motionFinish) {
      const timer = setTimeout(() => {
        navigate("/result/1"); //1 -> UUID 값으로 바뀔것
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [motionFinish, navigate]);

  return (
    <ExplainationContainer>
      <GlobalFontDNF />
      {motionFinish && (
        <AnimationContainer>
          <MoodingMotion />
          <SubExplainDiv>나만의 감정 쓰레기통</SubExplainDiv>
          <TrashCanContainer>
            <TrashCanImg src={trashcan} />
            <MoodingWord>무딩</MoodingWord>
          </TrashCanContainer>
        </AnimationContainer>
      )}
    </ExplainationContainer>
  );
};

export default Explaination;
