import styled from "styled-components";
import Mooding_Eat from "../../lib/images/Mooding_Eat.png";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";
import * as API from "../../lib/api/api";
import { useCallback } from "react";
import RemoveHTMLTags from "../../lib/RemoveHTMLTags";
import axios from "axios";

const MoodingEatImage = styled.img`
  width:400px;
  height:165px;
`;
const MoodingEat = ({ body }) => {
  const navigate = useNavigate();

  const drop = useCallback(
    async (item, monitor) => {
      const cleanBody = RemoveHTMLTags(body);
      try {
        const response = await axios.post("/feedback", {
          diaryContent: cleanBody
        });
        const locationValue = response.headers.location;
        const id = locationValue.split('/').pop();
        navigate(`/loading/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
    [body, navigate]
  );

  const [{ isOver }, dropRef] = useDrop({
    accept: "NOTE",
    drop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <MoodingEatImage src={Mooding_Eat} ref={dropRef} alt='MoodingEatImage' />
  );
}

export default MoodingEat;