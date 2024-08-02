import React from "react";
import styled from "styled-components";
import { Wave } from "../components/common/Wave";
import { GlobalFontDNF } from "../lib/fontSetting";
import bttomImg from "../lib/images/BottomForestImg.png";
import infoImg1 from "../lib/images/mooding_info1.png"; // 캐릭터 정보
import CharacterImg1 from "../lib/images/CharacterImg1.png";
import CharacterImg2 from "../lib/images/CharacterImg2.png";
import PhoneFrame from "../components/common/PhoneFrame";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { useNavigate } from "react-router-dom";

const CharacterPageContainer = styled.div`
  width: 430px;
  height: 100%;
`;

const CharacterTopStyle = styled(Wave)`
  width: 100%;
  height: 20dvh;
`;

const ReturnPageContainer = styled.button`
  margin: 15px;
  height: 3dvh;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const CharacterIntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
`;

const IntroImg = styled.img`
  width: 30px;
`;

const IntroText = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 30px;
`;

const CharacterInfoContainer = styled.div`
  width: 100%;
  height: 60dvh;
  display: flex;
  align-items: center;
  justify-content:center;
`;

const CharacterInfo = styled.div`
  width: 80%;
  padding: 2dvw;
  border-radius: 10px;
  border: solid 2px;
  height: 370px;
  font-size: 15px;
  font-family: "DNFBitBitv2", sans-serif;
  background-color: rgb(255, 255, 240);
  flex-wrap: wrap;
  box-shadow: 2px 2px 2px gray;
`;

const WordsInfo = styled.div`
  
`;

const TwoImgContainer = styled.div`
  height: 20dvw;
  display: flex;
  margin: 5dvw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.5dvw;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 20dvh;
  width: 100%;
`;
const BottomImg = styled.img`
  width: 100%;
`;

const CharacterPage = () => {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <CharacterPageContainer>
        <GlobalFontDNF />
        <CharacterTopStyle>
          <ReturnPageContainer
            onClick={() => {
              navigate("/information");
            }}
          >
            <ArrowBackIosSharpIcon fontSize="medium" style={{ cursor: "pointer", }} />
          </ReturnPageContainer>
          <CharacterIntroContainer>
            <IntroImg src={infoImg1} alt="infoImg1" />
            <IntroText>캐릭터 정보</IntroText>
          </CharacterIntroContainer>
        </CharacterTopStyle>

        <CharacterInfoContainer>
          <CharacterInfo>
            <WordsInfo>
              무딩(<span style={{ color: "red" }}>Mood In G</span>
              arbage)이는 포근하고 둥글둥글한 외형을 가진 귀여운 캐릭터입니다.💞
              <br />
              <br />
              반짝이는 큰 눈과, 따듯한 미소를 짓고 있는 입은 사용자의 나쁜감정을
              부드럽게 삼켜줍니다.💞
              <br />
              <br />
              감정을 먹어치운 무딩이는 당신에게 따뜻한 격려의 말과 함께 당신을
              위로해 줍니다.💞
              <br />
              <br />
              이제 무딩이와 함께 더 가벼워진 마음으로 하루를 마무리하세요!💞
            </WordsInfo>


            <TwoImgContainer>
              <img width={85} src={CharacterImg1} alt="Img1" />
              <img width={100} src={CharacterImg2} alt="Img2" />
            </TwoImgContainer>
          </CharacterInfo>
        </CharacterInfoContainer>

        <BottomContainer>
          <BottomImg src={bttomImg} alt="bottomImg" />
        </BottomContainer>
      </CharacterPageContainer>
    </PhoneFrame>
  );
};

export default CharacterPage;
