import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import smallMoodingImage from "../../lib/images/common-mooding(small).png";
import { useEffect, useRef } from 'react';

const StyledEditor = styled.div`
    width: 100%;
    height: 560px;
`;

const Editor = () => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);
    useEffect(()=>{
        quillInstance.current = new Quill(quillElement.current,{
            theme:'bubble',
            placeholder: '오늘 있었던 기분 나쁜일을 여기에 버려주세요',
            modules : {
            }
        })
    })
    return (
        <StyledEditor>
            <div ref={quillElement}/>
        </StyledEditor>
    );
}

export default Editor;