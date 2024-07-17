import styled from 'styled-components';


const StyledPhoneFrame = styled.div`
    width:430px;
    height: 932px;
    display:flex;
    justify-content:center;
`;

const PhoneFrame = ({children}) => {
    return (
        <StyledPhoneFrame>
            {children}
        </StyledPhoneFrame>
    );
}

export default PhoneFrame;