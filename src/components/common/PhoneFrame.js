import styled from 'styled-components';


const StyledPhoneFrame = styled.div`
    width:430px;
    height: 932px;
    display:flex;
    justify-content:center;
    border: solid 0.5px #dfdfe0;
    overflow-y: hidden;
`;

const PhoneFrame = ({children}) => {
    return (
        <StyledPhoneFrame>
            {children}
        </StyledPhoneFrame>
    );
}

export default PhoneFrame;