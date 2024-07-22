import styled from "styled-components";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import smallMoodingImage from "../../lib/images/common-mooding(small).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/FontAwesome";
import { useEffect, useRef, useState } from "react";
import linedPaper from "../../lib/images/linedPaper.png";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
`;

const StyledEditor = styled.div`
  width: 100%;
  height: 650px;
  background-color: #f7e6cb;
  border-radius: 20px;
  opacity: 100%;
  margin-top: 10px;
  background-image: url(${linedPaper});
  background-size : cover;
`;

const Button = styled.button`
  width: 327px;
  height: 69px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
  &:active {
    transform: scale(95%);
  }
`;

const ButtonContainer = styled.div`
  width: inherit;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 19px;
  font-weight: bold;
`;

const UpperBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MoodingsBar = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 74px;
`;

const QuillField = styled.div`
  font-size: 21px;
  font-weight: bold;
  overflow-y: hidden;
  height: 500px;
`;

const Editor = () => {
  const [body, setBody] = useState("");
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "당신의 기분을 상하게 했던 일을 무딩이에게 버려주세요",
      modules: {},
    });

    const quill = quillInstance.current;
    quill.on("text-change", () => {
      setBody(quill.root.innerHTML);
    });
    return () => {
      quill.off("text-change");
    };
  }, []);

  return (
    <EditorContainer>
      <StyledEditor>
        <UpperBar>
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-left"
            style={{ marginLeft: "10px" }}
          />
          <Title>감정 털어놓기</Title>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-info"
            style={{ marginRight: "10px" }}
          />
        </UpperBar>
        <MoodingsBar>
          <img src={smallMoodingImage} alt="small mooding" />
        </MoodingsBar>
        <QuillField ref={quillElement} />
      </StyledEditor>
      <ButtonContainer>
        <Button onClick={() => console.log(body)}>무딩이에게 먹이주기</Button>
      </ButtonContainer>
    </EditorContainer>
  );
};

export default Editor;
