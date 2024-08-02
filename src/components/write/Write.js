import React, { useState } from "react";
import Editor from "./Editor";
import Note from "./Note";
import styled, { keyframes } from "styled-components";
import MoodingEat from "./MoodingEat";
import CustomDragLayer from "./CustomDragLayer";
import TitleContainerComponent from "../common/TitleContainerComponent";
import { GlobalFontDNF } from "../../lib/fontSetting";
import { Wave } from "../common/Wave";
import clickImg from "../../lib/images/ClickPointer.png";

const StyledWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const WritePageTopBackgroundContainer = styled(Wave)`
  height: 18dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
`;

const EditorContainer = styled.div`
  height: 20dvh;
  width: 92%;
`;

const ClickImgContainer = styled.div`
  height: 5dvh;
  width: 100%;
  display: flex;
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const ClickImg = styled.img`
  margin-left: 200px;
  width: 50px;
  height: 50px;
  animation: ${blink} 1s infinite;
`;

const EatWellDiv = styled.div`
  font-size: 22;
  font-family: "DNFBitBitv2", sans-serif;
`;

const Write = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [body, setBody] = useState("");
  const [dropped, setDropped] = useState(false);
  return (
    <StyledWriteContainer>
      <GlobalFontDNF />

      {!buttonClicked && (
        <WritePageTopBackgroundContainer>
          <TitleContainerComponent />
        </WritePageTopBackgroundContainer>
      )}

      {!dropped ? (
        <NoteContainer>
          {buttonClicked ? (
            <Editor setButtonClicked={setButtonClicked} setBody={setBody} />
          ) : (
            <EditorContainer>
              <Note setNoteClicked={setButtonClicked} />
              <ClickImgContainer>
                <ClickImg src={clickImg} />
              </ClickImgContainer>
            </EditorContainer>
          )}
        </NoteContainer>
      ) : (
        <EatWellDiv>냠냠냠... 감정을 먹고 있어요</EatWellDiv>
      )}
      <MoodingEat body={body} setDropped={setDropped} />
      <CustomDragLayer />
    </StyledWriteContainer>
  );
};

export default Write;
