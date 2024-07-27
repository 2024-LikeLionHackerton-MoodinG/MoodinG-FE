import styled from "styled-components";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/FontAwesome";
import { useEffect, useRef, useState } from "react";
import {GlobalFontDNF,GlobalFontDalmoori} from "../../lib/fontSetting";
import Mooding_trashcan from "../../lib/images/Mooding_trashcan.png";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StyledEditor = styled.div`
  width: 100%;
  height: 650px;
  background-color: #fafbed;
  border-radius: 20px;
  opacity: 100%;
  margin-top: 10px;
  background-size: cover;
`;

const Title = styled.p`
  font-size: 19px;
  font-weight: bold;
  font-family:"DNFBitBitv2",sans-serif;
`;

const TitleBar = styled.div`
  display:flex;
  flex-direction:row;
`
const TrashCanImage = styled.img`
  width:31;
  height: 53.14;
  margin-left: 3px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const QuillField = styled.div`
  font-size: 15px;
  font-weight: bold;
  overflow-y: hidden;
  height: 500px;
`;



const Editor = ({setButtonClicked}) => {
  const [body, setBody] = useState("");
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    const Font = Quill.import("formats/font");
    Font.whitelist = ["dalmoori"];
    Quill.register(Font, true);

    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "당신의 기분을 상하게 했던 일을 무딩이에게 버려주세요...",
      modules: {},
    });

    const quill = quillInstance.current;
    quill.root.style.fontFamily = "dalmoori, sans-serif"; 

    quill.on("text-change", () => {
      setBody(quill.root.innerHTML);
    });
    return () => {
      quill.off("text-change");
    };
  }, []);

  return (
    <EditorContainer>
      <GlobalFontDNF/>
      <GlobalFontDalmoori/> 
      <StyledEditor>
        <TitleContainer>
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-left"
            style={{ marginLeft: "10px"}}
            onClick={()=>{
              setButtonClicked(false);
              alert("노트에 감정이 쓰여졌어요!")
              console.log(body);
            }}
          />
          <TitleBar>
            <Title>감정 털어놓기</Title>
            <TrashCanImage src={Mooding_trashcan} alt="mooding_trashcan" />
          </TitleBar>
          <div></div>  {/*공간채우기용*/}
        </TitleContainer>
        <QuillField ref={quillElement} />
      </StyledEditor>
    </EditorContainer>
  );
};

export default Editor;
