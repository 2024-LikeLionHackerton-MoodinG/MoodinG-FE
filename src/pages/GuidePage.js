import React from "react";
import styled from "styled-components";
import { Wave } from "../components/common/Wave";
import { GlobalFontDNF } from "../lib/fontSetting";
import infoImg2 from "../lib/images/mooding_info2.png";
import PhoneFrame from "../components/common/PhoneFrame";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { useNavigate } from "react-router-dom";
import one from "../lib/images/one.png";
import two from "../lib/images/two.png";
import three from "../lib/images/three.png";
import four from "../lib/images/four.png";
import five from "../lib/images/five.png";
import bottomImg from "../lib/images/BottomCloundImg.png";

const GuidePageContainer = styled.div`
  width: 430px;
  height: 100%;
`;

const GuideTopStyle = styled(Wave)`
  width: 100%;
  height: 20dvh;
`;

const ReturnPageContainer = styled.button`
  margin: 15px;
  height: 3dvh;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const GuideIntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
`;

const IntroImg = styled.img`
  width: 40px;
`;

const IntroText = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 30px;
`;

const GuideExplanationContainer = styled.div`
  height: 50dvh;
  width: 100%;
`;

const EachGuideExplanation = styled.div`
  height: 10dvh;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 16px;
  font-family: "DNFBitBitv2", sans-serif;
  margin-left: 20px;
`;

const NumberStyle = styled.img`
  width: 20px;
  margin: 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 32dvh;
  width: 100%;
`;
const BottomImg = styled.img`
  width: 100%;
`;

const GuidePage = () => {
  const navigate = useNavigate();
  return (
    <PhoneFrame>
      <GuidePageContainer>
        <GlobalFontDNF />
        <GuideTopStyle>
          <ReturnPageContainer
            onClick={() => {
              navigate("/information");
            }}
          >
            <ArrowBackIosSharpIcon fontSize="medium" />
          </ReturnPageContainer>
          <GuideIntroContainer>
            <IntroImg src={infoImg2} alt="infoImg1" />
            <IntroText>사용자 가이드</IntroText>
          </GuideIntroContainer>
        </GuideTopStyle>

        <GuideExplanationContainer>
          <EachGuideExplanation>
            <NumberStyle src={one} />
            <span style={{ color: "red" }}>일기장</span>을 터치하여 시작해
            주세요.
          </EachGuideExplanation>
          <EachGuideExplanation>
            <NumberStyle src={two} />
            하고싶은 말들을 적어 주세요.
          </EachGuideExplanation>
          <EachGuideExplanation>
            <NumberStyle src={three} />
            <span style={{ color: "red" }}>뒤로가기&nbsp;</span>버튼으로 일기장
            닫아 주세요.
          </EachGuideExplanation>
          <EachGuideExplanation>
            <NumberStyle src={four} />
            일기장을&nbsp;<span style={{ color: "red" }}> 드래그</span>해
            무딩이에게 먹여 주세요.
          </EachGuideExplanation>
          <EachGuideExplanation>
            <NumberStyle src={five} />
            <span style={{ color: "red" }}>비속어, 과한오타</span>&nbsp;등은
            피해주세요!
          </EachGuideExplanation>
        </GuideExplanationContainer>

        <BottomContainer>
          <BottomImg src={bottomImg} />
        </BottomContainer>
      </GuidePageContainer>
    </PhoneFrame>
  );
};

export default GuidePage;
