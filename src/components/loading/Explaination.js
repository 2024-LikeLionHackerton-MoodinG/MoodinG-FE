import styled from "styled-components";
import { GlobalFontDNF } from "../../lib/fontSetting";
import trashcan from "../../lib/images/Mooding_trashcan.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MoodingMotion from "./MoodingMotion";
import * as API from "../../lib/api/api";

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
        const statusFromResponse = response.data.status;  //"IN PROGRESS" or "DONE"이 됩니다. 
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
    }
    if (motionFinish) {
      intervalId = setInterval(fetchData, 500);
      return () => {
        clearTimeout(intervalId);
      };
    }
  }, [motionFinish, navigate, id, status, location]);

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
