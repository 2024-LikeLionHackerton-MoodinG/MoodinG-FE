import React, { useState } from 'react';
import Editor from "./Editor";
import Note from './Note';
import styled from 'styled-components';
import MoodingEat from './MoodingEat';
import CustomDragLayer from './CustomDragLayer';
import TitleContainerComponent from '../common/TitleContainerComponent';
import { GlobalFontDNF } from '../../lib/fontSetting';

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

const EatWellDiv = styled.div`
  font-size: 22ㅑx;
  font-family: 'DNFBitBitv2',sans-serif;
`

const Write = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [body, setBody] = useState("");
  const [dropped, setDropped] = useState(false);
  return (
    <StyledWriteContainer>
      <GlobalFontDNF />
      {
        !buttonClicked && <TitleContainerComponent />
      }
      {!dropped ? (
        <NoteContainer>
          {buttonClicked ? (
            <Editor setButtonClicked={setButtonClicked} setBody={setBody} />
          ) : (
            <Note setNoteClicked={setButtonClicked} />
          )}
        </NoteContainer>
      ) : (
        <EatWellDiv>
          냠냠냠... 감정을 먹고 있어요
        </EatWellDiv>
      )}
      <MoodingEat body={body} setDropped={setDropped} />
      <CustomDragLayer />
    </StyledWriteContainer>
  );
};

export default Write;
