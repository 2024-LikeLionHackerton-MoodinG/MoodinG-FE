import styled from "styled-components";
import moodingNote from "../../lib/images/mooding_note.png";
import TitleContainerComponent from "../common/TitleContainerComponent";
import { GlobalFontDNF } from "../../lib/fontSetting";
const StyledNote = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const NoteContainer = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const NoteImgButton = styled.button`
    width:140px;
    height:140px;
    background-image: url(${moodingNote});
    border: none;
    background-color: transparent;
    margin-top:250px;
`;


const Note = ({setNoteClicked}) => {
    return(
        <StyledNote>
            <GlobalFontDNF/> 
            <TitleContainerComponent/>
            <NoteContainer>
                 <NoteImgButton onClick={()=>{
                setNoteClicked(true);
            }}/>
            </NoteContainer>
        </StyledNote>
    );
}

export default Note;