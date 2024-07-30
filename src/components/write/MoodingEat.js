import styled from "styled-components";
import Mooding_Eat from "../../lib/images/Mooding_Eat.png";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";
import * as API from "../../lib/api/api";
import { useCallback } from "react";
import RemoveHTMLTags from "../../lib/RemoveHTMLTags";

const MoodingEatImage = styled.img`
  width:400px;
  height:165px;
`;
const MoodingEat = ({ body }) => {
  const navigate = useNavigate();

  const drop = useCallback(
    async (item, monitor) => {
      //   console.log("Note Dropped In Mooding's Mouth!!!!");
      //   console.log("content is:", body); 
      const cleanBody = RemoveHTMLTags(body);
      //   console.log(cleanBody);
      try {
        const response = await API.feedback("/feedback", {
          diaryContent: cleanBody
        }, {
          withCredentials: true
        });
        navigate("/loading");
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