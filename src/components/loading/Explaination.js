import styled from "styled-components";
import { GlobalFontDalmoori } from "../../lib/fontSetting";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MoodingMotion from "./MoodingMotion";

const StyledExplaination = styled.div`
  position: absolute;
  font-size: 20px;
  font-family: "dalmoori", sans-serif;
  font-weight: bold;
`;

const Explaination = ({ motionFinish }) => {
  /*
  const navigate = useNavigate();
  useEffect(() => {
    // Todo : 추가 로직 구현 -> 로직이 바뀔 수도 있다.
    // 1. localStorage에서 UUID 불러옴
    // 2. 서버로부터 UUID get
    // 3. 비교를 통해 유효성 검사

    if (motionFinish) {
      const timer = setTimeout(() => {
        navigate("/result/1"); //1 -> UUID 값으로 바뀔것
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [motionFinish, navigate]);
*/
  return (
    <>
      <GlobalFontDalmoori />
      {motionFinish && (
        <StyledExplaination>
          <MoodingMotion />
          무딩이가 감정일기를 소화중이에요...
        </StyledExplaination>
      )}
    </>
  );
};

export default Explaination;
