import styled from "styled-components";
import smallMooding2 from "../../lib/images/Mooding_small2.png";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 333px;
`;
const StyledStartButton = styled.button`
  margin-top: 100px;
  bottom: 150px;
  color: black;
  border: 3px solid black;
  font-size: 25px;
  background-color: #FAFBED;
  font-family: "DNFBitBitv2", sans-serif;
  border-radius: 20px;
  min-height: 70px;
  min-width: 340px;
  cursor: pointer;
  transition: background-color 0.1s;
  &:active {
    border-width: 4px;
    background-color: #fafaa0;
    opacity: 75%;
  }
  box-shadow: 2px 2px 2px;
`;

const InformationButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const InformationImg = styled.img`
  width: 40px;
  height: 34.47px;
`;
const InformationButton = styled.button`
  background-color: transparent;
  font-family: "DNFBitBitv2", sans-serif;
  font-size: 16px;
  border-width: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline 3px black;
  }
`;

const StartButton = ({ setButtonClick }) => {
  return (
    <ButtonsContainer>
      <StyledStartButton
        onClick={() => {
          setButtonClick(true);
        }}
      >
        시작하기
      </StyledStartButton>
      <InformationButtonContainer>
        <InformationImg src={smallMooding2}></InformationImg>
        <InformationButton>알아보기</InformationButton>
      </InformationButtonContainer>
    </ButtonsContainer>
  );
};

export default StartButton;
