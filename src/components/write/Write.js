import React, { useState } from 'react';
import Editor from "./Editor";
import Note from './Note';
import styled from 'styled-components';
import MoodingEat from './MoodingEat';
import CustomDragLayer from './CustomDragLayer';
import TitleContainerComponent from '../common/TitleContainerComponent';

const StyledWriteContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
`;
const NoteContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  width:92%;
`

const Write = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [body, setBody] = useState("");
  return (
    <StyledWriteContainer>
      {
        !buttonClicked && <TitleContainerComponent />
      }
      <NoteContainer>
        {buttonClicked ? (
          <Editor setButtonClicked={setButtonClicked} setBody={setBody} />
        ) : (
          <Note setNoteClicked={setButtonClicked} />
        )}
      </NoteContainer>

      <MoodingEat body={body} />
      <CustomDragLayer />
    </StyledWriteContainer>
  );
};

export default Write;
