import React, { useState } from 'react';
import Editor from "./Editor";
import Note from './Note';
import Mooding_Eat from "../../lib/images/Mooding_Eat.png";
import styled from 'styled-components';

const StyledWriteContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
`

const MoodingEatImage = styled.img`
  width:400px;
  height:165px;
`;

const Write = () => {
  const [buttonClicked,setButtonClicked] = useState(false);
  return (
    <StyledWriteContainer>
      {
        (buttonClicked) ? (
          <Editor setButtonClicked={setButtonClicked}/>
        ):(
          <Note setNoteClicked={setButtonClicked}/>
        )
      }
      <MoodingEatImage src={Mooding_Eat} alt='MoodingEatImage'/>
    </StyledWriteContainer>
  );
};

export default Write;