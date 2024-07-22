import styled from "styled-components";


export const Wave = styled.div`
  background: linear-gradient(#ffecb6, #fcf082);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 100"><path d="M0,80 Q107.5,40 215,80 T430,80 L430,100 L0,100 Z" fill="white"/></svg>')
      no-repeat bottom;
    background-size: cover;
  }
`;

