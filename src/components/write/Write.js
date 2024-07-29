import React, { useState } from 'react';
import Editor from "./Editor";
import Note from './Note';
import styled from 'styled-components';
import MoodingEat from './MoodingEat';
import CustomDragLayer from './CustomDragLayer';

const StyledWriteContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
`;

const Write = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [body,setBody] = useState("");
  return (
    <StyledWriteContainer>
      {buttonClicked ? (
        <Editor setButtonClicked={setButtonClicked} setBody={setBody} />
      ) : (
        <Note setNoteClicked={setButtonClicked} />
      )}
      <MoodingEat body={body}/>
      <CustomDragLayer />
    </StyledWriteContainer>
  );
};

export default Write;
