import styled from "styled-components";
import { GlobalFontDNF } from "../../lib/fontSetting";
import { Wave } from "../common/Wave";
import moodingInfoTop from "../../lib/images/mooding_info_top.png";
import startMoodingImage from "../../lib/images/MoodingImformationImg.png";
import InfoButtons from "./InfoButtons";
import bottomImg from "../../lib/images/BottomForestImg.png";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { useNavigate } from "react-router-dom";
const InformationContainer = styled.div``;

const StyledInfomation = styled(Wave)`
  width: 100%;
  height: 20dvh;
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 430px;
  height: 3dvh;
`;

const IntroImg = styled.img`
  width: 50px;
`;

const IntroText = styled.div`
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 30px;
`;

const MoodingImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 37.5dvh;
`;
const StartMoodingImage = styled.img`
  width: 330px;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 23.3dvh;
  width: 100%;
`;
const BottomImg = styled.img`
  width: 100%;
`;

const ReturnPageContainer = styled.button`
  margin: 15px;
  height: 3dvh;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const Information = () => {
  const navigate = useNavigate();
  return (
    <InformationContainer>
      <GlobalFontDNF />

      <StyledInfomation>
        <ReturnPageContainer
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowBackIosSharpIcon fontSize="medium" style={{ cursor: "pointer" }} />
        </ReturnPageContainer>
        <IntroContainer>
          <IntroImg src={moodingInfoTop} alt="mooding info top img" />
          <IntroText>알아보기</IntroText>
        </IntroContainer>
      </StyledInfomation>

      <MoodingImgContainer>
        <StartMoodingImage src={startMoodingImage} alt="start mooding img" />
      </MoodingImgContainer>

      <InfoButtons />
      <BottomContainer>
        <BottomImg src={bottomImg} />
      </BottomContainer>
    </InformationContainer>
  );
};

export default Information;
