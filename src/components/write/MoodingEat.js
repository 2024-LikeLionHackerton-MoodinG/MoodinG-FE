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
const MoodingEat = ({ body, setDropped }) => {
  const navigate = useNavigate();

  const drop = useCallback(
    async (item, monitor) => {
      const cleanBody = RemoveHTMLTags(body);
      setDropped(true);
      try {
        const response = await API.feedback({
          diaryContent: cleanBody
        }
        );
        console.log(response);
        const locationValue = response.headers.location;
        const id = locationValue.split('/').pop();
        console.log(id)
        navigate(`/loading/${id}`);
        setDropped(false);
      } catch (error) {
        console.log(error);
      }
    },
    [body, navigate, setDropped]
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