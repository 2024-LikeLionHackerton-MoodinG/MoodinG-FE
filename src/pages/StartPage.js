import React from 'react';
import PhoneFrame from '../components/common/PhoneFrame';
import Start from '../components/start/Start';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();
    return (
        <PhoneFrame>
            {/* <Start /> */}
            <button onClick={()=>{
                navigate("/result/1");
            }}>1</button>
        </PhoneFrame>
    );
};

export default StartPage;