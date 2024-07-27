import styled from "styled-components";
import Mooding_Eat from "../../lib/images/Mooding_Eat.png";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";


const MoodingEatImage = styled.img`
  width:400px;
  height:165px;
`;
const MoodingEat = () => {
    const navigate = useNavigate();
    const [{isOver},drop] = useDrop(()=>({
        accept: "NOTE",
        drop: (item,monitor) => {
            console.log("Note Dropped In Mooding's Mouth!!!!");
            navigate("/loading");
        },
        collect:(monitor) => ({
            isOver: monitor.isOver(),
        })
    }))
    return(
        <MoodingEatImage src={Mooding_Eat} ref={drop} alt='MoodingEatImage'/>
    );
}

export default MoodingEat;