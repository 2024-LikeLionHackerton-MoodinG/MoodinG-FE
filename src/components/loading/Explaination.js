import styled from "styled-components";
import { GlobalFontDNF } from "../../lib/fontSetting";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MoodingMotion from "./MoodingMotion";
import StarMotion from "./StarMotion";
import bottomCloundImg from "../../lib/images/BottomCloundImg.png";
import cloudIcon from "../../lib/images/CloudIcon.png";
import moonIcon from "../../lib/images/MoonIcon.png";
import * as API from "../../lib/api/api";
import SubExplain from "./SubExplaination";

const ExplainationContainer = styled.div``;

const AnimationContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16dvh;
  gap: 10px;
`;

const BottomImgContainer = styled.div`
  height: 170px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const CloudIcon = styled.img`
  height: 11dvh;
  width: 17dvw;
`;
const MoonIcon = styled.img`
  height: 13dvh;
  width:  18dvw;
`;

const BottomBackgroundContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 29.5dvh;
  width: 100%;
`;
const BottomCloud = styled.img`
  width: 100%;
`;

const Explaination = ({ motionFinish }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const location = useLocation();
  //useLocation사용과 더불어 location을 useEffect 종속배열에
  //넣음으로써 페이지 이동시 API 호출을 멈추는 구조임.

  useEffect(() => {
    let intervalId;
    const fetchData = async () => {
      try {
        const response = await API.feedback_status({ id });
        const statusFromResponse = response.data.status; //"IN PROGRESS" or "DONE"이 됩니다.
        setStatus(statusFromResponse);
        console.log(status);
        if (status === "DONE") {
          clearInterval(intervalId);
          navigate(`/result/${id}`);
        }
      } catch (error) {
        console.log(error);
        clearInterval(intervalId);
      }
    };
    intervalId = setInterval(fetchData, 500);
    return () => {
      clearTimeout(intervalId);
    };
  }, [navigate, id, status, location]);

  return (
    <ExplainationContainer>
      <GlobalFontDNF />
      <AnimationContainer>
        <MoodingMotion />
        <SubExplain />
        <BottomImgContainer>
          <MoonIcon src={moonIcon} alt="moonIcon" />
          <StarMotion />
          <CloudIcon src={cloudIcon} alt="cloudIcon" />
        </BottomImgContainer>
      </AnimationContainer>
      <BottomBackgroundContainer>
        <BottomCloud src={bottomCloundImg} />
      </BottomBackgroundContainer>
    </ExplainationContainer>
  );
};

export default Explaination;
