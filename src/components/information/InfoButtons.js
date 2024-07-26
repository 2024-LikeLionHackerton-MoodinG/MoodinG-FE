import styled from "styled-components";
import infoImg1 from "../../lib/images/mooding_info1.png"; // 캐릭터 정보
import infoImg2 from "../../lib/images/mooding_info2.png"; // 이용약관
import infoImg3 from "../../lib/images/mooding_info3.png"; // 개인정보 처리방침

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  height: 300px;
`;

const EachButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const InfoButton = styled.button`
  color: black;
  border: 3px solid black;
  font-size: 25px;
  background-color: #fafbed;
  font-family: "DNFBitBitv2", sans-serif;
  border-radius: 20px;
  min-height: 70px;
  min-width: 340px;
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
  return (
    <ButtonsContainer>
      <EachButtonContainer>
        <InfoButton>
          <InfoImg src={infoImg1} width="30px" />
          캐릭터 정보
        </InfoButton>
      </EachButtonContainer>

      <EachButtonContainer>
        <InfoButton>
          <InfoImg src={infoImg2} width="40px" />
          이용약관
        </InfoButton>
      </EachButtonContainer>

      <EachButtonContainer>
        <InfoButton>
          <InfoImg src={infoImg3} width="40px" />
          개인정보 처리방침
        </InfoButton>
      </EachButtonContainer>
    </ButtonsContainer>
  );
};

export default InfoButtons;
