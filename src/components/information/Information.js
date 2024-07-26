import styled from "styled-components";
import { GlobalFontDNF } from "../../lib/fontSetting";
import { Wave } from "../common/Wave";
import moodingInfoTop from "../../lib/images/mooding_info_top.png";
import startMoodingImage from "../../lib/images/start-mooding.png";
import InfoButtons from "./InfoButtons";

const InformationContainer = styled.div``;

const StyledInfomation = styled(Wave)`
  width: 430px;
  height: 200px;
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 430px;
  height: 150px;
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
  height: 400px;
`;
const StartMoodingImage = styled.img`
  width: 300px;
`;

const Information = () => {
  return (
    <InformationContainer>
      <GlobalFontDNF />

      <StyledInfomation>
        <IntroContainer>
          <IntroImg src={moodingInfoTop} alt="mooding info top img" />
          <IntroText>알아보기</IntroText>
        </IntroContainer>
      </StyledInfomation>

      <MoodingImgContainer>
        <StartMoodingImage src={startMoodingImage} alt="start mooding img" />
      </MoodingImgContainer>

      <InfoButtons />
    </InformationContainer>
  );
};

export default Information;
