import styled from "styled-components";
import infoImg1 from "../../lib/images/mooding_info1.png"; // 캐릭터 정보
import infoImg2 from "../../lib/images/mooding_info2.png"; // 이용약관
import { useNavigate } from "react-router-dom";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
`;

const EachContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

const InfoButton = styled.button`
  color: black;
  border: 3px solid black;
  font-size: 25px;
  background-color: #fafbed;
  font-family: "DNFBitBitv2", sans-serif;
  border-radius: 20px;
  height: 50px;
  width: 340px;
  cursor: pointer;
  transition: background-color 0.1s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    border-width: 4px;
    background-color: #fafaa0;
    opacity: 75%;
  }
  box-shadow: 2px 2px 2px;
`;

const InfoImg = styled.img`
  margin-right: 10px;
`;



const InfoButtons = () => {
  const navigate = useNavigate();
  return (
    <ButtonsContainer>
      <EachContainer>
        <InfoButton onClick={() => {
          navigate("/information/character");
        }}>
          <InfoImg src={infoImg1} width="30px" />
          캐릭터 정보
        </InfoButton>
      </EachContainer>

      <EachContainer>
        <InfoButton onClick={() => {
          navigate("/information/guide");
        }}>
          <InfoImg src={infoImg2} width="40px" />
          사용자 가이드
        </InfoButton>
      </EachContainer>

    </ButtonsContainer>
  );
};

export default InfoButtons;
