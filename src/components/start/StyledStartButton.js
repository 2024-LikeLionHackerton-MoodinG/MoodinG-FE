import styled from "styled-components";

const StyledStartButton = styled.button`
  position: absolute;
  bottom: 150px;
  color: black;
  border: 3px solid black;
  font-size: 25px;
  background-color: white;
  font-family: 'DNFBitBitv2', sans-serif;
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

export default StyledStartButton;
