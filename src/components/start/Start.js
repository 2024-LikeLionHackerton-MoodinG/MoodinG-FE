import styled from "styled-components";
import startMoodingImage from "../../lib/images/ModingStartImg.png";
import { GlobalFontDNF } from "../../lib/fontSetting";
import { Wave } from "../common/Wave";
import trashcan from "../../lib/images/Mooding_trashcan.png";
import StartButton from "./StartButton";
import { useEffect, useState } from "react";
import StartExplain from "./StartExplain";
import * as API from "../../lib/api/api";
import bottomImg from "../../lib/images/BottomForestImg.png";

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledStart = styled(Wave)`
  width: 430px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledStartMoodingImage = styled.img`
  width: 250px;
  height: 250px;
`;

const SubExplainDiv = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 20px;
  background: linear-gradient(#fcc101, #f26804);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const TrashCanContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
`;

const TrashCanImg = styled.img`
  width: 46px;
  height: 65px;
  margin-right: 10px;
`;

const MoodingWord = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 36px;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 23dvh;
  width: 100%;
`;
const BottomImg = styled.img`
  width: 100%;
`;

const Start = () => {
  const [buttonClick, setButtonClick] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const header = await API.session();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <StartContainer>
      <GlobalFontDNF />
      <StyledStart>
        <StyledStartMoodingImage
          src={startMoodingImage}
          alt="start mooding img"
        />
        <SubExplainDiv>나만의 감정 쓰레기통</SubExplainDiv>
        <TrashCanContainer>
          <TrashCanImg src={trashcan} />
          <MoodingWord>무딩</MoodingWord>
        </TrashCanContainer>
      </StyledStart>

      {buttonClick ? (
        <StartExplain
          buttonClick={buttonClick}
          setButtonClick={setButtonClick}
        ></StartExplain>
      ) : (
        <StartButton setButtonClick={setButtonClick}>무딩 시작하기</StartButton>
      )}

      <BottomContainer>
        <BottomImg src={bottomImg} />
      </BottomContainer>
    </StartContainer>
  );
};

export default Start;
