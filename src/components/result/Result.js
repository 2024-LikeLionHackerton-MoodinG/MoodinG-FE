import { GlobalFontDNF } from "../../lib/fontSetting";
import styled from "styled-components";
import resultMoodingImage from "../../lib/images/ModingResutImg.png";
import { Wave } from "../common/Wave";
import titleImg from "../../lib/images/mooding_info3.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import TypeIt from "typeit";
import * as API from "../../lib/api/api";
import bottomImg from "../../lib/images/BottomForestImg.png";

// Result.js
const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BackgrondContainer = styled(Wave)`
  width: 100%;
  height: 20dvh;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 15dvh;
`;

const TitleImage = styled.img`
  width: 35px;
`;

const Title = styled.p`
  font-size: 30px;
  font-family: "DNFBitBitv2", sans-serif;
`;

const ResultMoodingImageContainer = styled.div`
  width: 100%;
  height: 28dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultMoodingImage = styled.img`
  width: 280px;
`;

const ButtonBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4dvh;
  gap: 20px;
`;

const Button = styled.button`
  color: white;
  border: 3px solid black;
  font-size: 20px;
  background-color: black;
  font-family: "DNFBitBitv2", sans-serif;
  border-radius: 20px;
  height: 5dvh;
  width: 150px;
  cursor: pointer;
  transition: background-color 0.1s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;

  &:active {
    border-width: 4px;
    background-color: #f1f1d1;
    color: black;
    opacity: 75%;
  }
  box-shadow: 2px 2px 2px;
`;

const ComunicationContainer = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const ComuincationBox = styled.div`
  width: 100%;
  min-height: 200px;
  border: 5px outset rgb(220, 220, 220);
  border-radius: 10px;
  font-family: "DNFBitBitv2", sans-serif;
  padding: 10px;
  overflow-wrap: break-word;
  word-break: break-all;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 14dvh;
  width: 100%;
`;

const BottomImg = styled.img`
  width: 100%;
`;

const Result = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [content, setContent] = useState("");
  const [showButton, setShowButton] = useState(false); // 버튼 표시 상태
  const comuincationBoxRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.feedback_content(params);
        setContent(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    if (content) {
      const sentences = content
        .split(/(?<=[.!?])\s+/)
        .filter((sentence) => sentence.trim().length > 0);
      
      new TypeIt(comuincationBoxRef.current, {
        strings: sentences,
        speed: 90,
        startDelay: 500,
        breakLines: true,
        nextStringDelay: 750,
        cursor: false,
        afterComplete: (instance) => {
          setShowButton(true); 
          instance.destroy();
        },
      }).go();
    }
  }, [content]);

  return (
    <ResultContainer>
      <GlobalFontDNF />
      <BackgrondContainer>
        <TitleContainer>
          <TitleImage src={titleImg} alt="trashCanImg" />
          <Title>배불러용</Title>
        </TitleContainer>
      </BackgrondContainer>
      <ResultMoodingImageContainer>
        <ResultMoodingImage src={resultMoodingImage} alt="result mooding img" />
      </ResultMoodingImageContainer>

      <ComunicationContainer>
        <ComuincationBox ref={comuincationBoxRef} />
      </ComunicationContainer>

      <ButtonBar>
        <Button
          visible={showButton} // 버튼 표시 상태에 따라 가시성 설정
          onClick={() => {
            navigate("/");
          }}
        >
          처음으로
        </Button>
      </ButtonBar>

      <BottomContainer>
        <BottomImg src={bottomImg} />
      </BottomContainer>
    </ResultContainer>
  );
};

export default Result;
