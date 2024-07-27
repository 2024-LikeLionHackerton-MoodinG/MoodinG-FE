import React from 'react';
import styled from 'styled-components';
import Mooding_trashcan from '../../lib/images/Mooding_trashcan.png';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  font-size: 19px;
  font-weight: bold;
  font-family: "DNFBitBitv2", sans-serif;
`;

const TrashCanImage = styled.img`
  width: 31px;
  height: 53.14px;
  margin-left: 3px;
  cursor: pointer;
`;

const TitleContainerComponent = () => {
  return (
    <TitleContainer>
      <TitleBar>
        <Title>감정 털어놓기</Title>
        <TrashCanImage src={Mooding_trashcan} alt="mooding_trashcan" />
      </TitleBar>
    </TitleContainer>
  );
};

export default TitleContainerComponent;
