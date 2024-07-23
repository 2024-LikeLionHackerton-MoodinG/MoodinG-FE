import styled from "styled-components";
import linedPaper from "../../lib/images/linedPaper.png";
import { useEffect, useRef} from "react";
import anime from "animejs";

const StyledMovingPaper = styled.div`
  width: 400px;
  height: 500px;
  background-image: url(${linedPaper});
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MovingPaper = ({setAnimeDone}) => {
  const paperRef = useRef();
  useEffect(() => {
    try {
      anime({
        targets: paperRef.current,
        translateY: [0, window.innerHeight],
        duration: 4000,
        easing: "easeInOutQuad",
        complete:()=>{
          setAnimeDone(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [setAnimeDone]);
  return <StyledMovingPaper ref={paperRef} />;
};

export default MovingPaper;
