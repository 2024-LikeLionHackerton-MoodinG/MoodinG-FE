import { GlobalFontDNF } from "../../lib/fontSetting";
import styled from "styled-components";
import resultMoodingImage from "../../lib/images/result-mooding.png";
import { Wave } from "../common/Wave";
import titleImg from "../../lib/images/mooding_info3.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as API from "../../lib/api/api";
//Result.js
const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BackgrondContainer = styled(Wave)`
  width: 100%;
  height: 200px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 430px;
  height: 150px;
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
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ResultMoodingImage = styled.img`
  width: 300px;
`;

const ButtonBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 60px;
  gap: 20px;
`;

const Button = styled.button`
  color: white;
  border: 3px solid black;
  font-size: 25px;
  background-color: black;
  font-family: "DNFBitBitv2", sans-serif;
  border-radius: 20px;
  height: 50px;
  width: 200px;
  cursor: pointer;
  transition: background-color 0.1s;

  &:active {
    border-width: 4px;
    background-color: #f1f1d1;
    color: black;
    opacity: 75%;
  }
  box-shadow: 2px 2px 2px;
`;

const ComunicationContainer = styled.div`
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const ComuincationBox = styled.div`
  width: 380px;
  height: 290px;
  border: 5px outset rgb(220, 220, 220);
  border-radius: 10px;
`;

const Result = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [content,setContent] = useState("");
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await API.feedback_content(params);
        setContent(response.data.result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  })
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

      <ButtonBar>
        <Button onClick={() => {
          navigate("/")
        }}>처음으로</Button>
      </ButtonBar>
      <ComunicationContainer>
        <ComuincationBox>
          {content}
        </ComuincationBox>
      </ComunicationContainer>
    </ResultContainer>
  );
};

export default Result;
