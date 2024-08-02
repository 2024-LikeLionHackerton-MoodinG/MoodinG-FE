import styled from "styled-components";
import moodingNote from "../../lib/images/mooding_note.png";
import { GlobalFontDNF } from "../../lib/fontSetting";
import { useDrag } from "react-dnd";

const StyledNote = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NoteContainer = styled.div`
    height: 5dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`;

const NoteImgButton = styled.button`
    width: 140px;
    height: 140px;
    background-image: url(${moodingNote});
    background-repeat: no-repeat;
    border: none;
    background-color: transparent; 
    cursor: pointer;
    touch-action: none;
`;



const Note = ({ setButtonClicked, setNoteButtonClick }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'NOTE',
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <StyledNote>
            <GlobalFontDNF />
            <NoteContainer isDragging={isDragging}>
                <NoteImgButton ref={drag} onClick={() => {
                    setButtonClicked(true);
                    setNoteButtonClick(true);
                }} />
            </NoteContainer>
        </StyledNote>
    );
};

export default Note;
