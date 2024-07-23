import React from 'react';
import PhoneFrame from '../components/common/PhoneFrame.js'
import Loading from "../components/loading/Loading.js"

const LoadingPage = () => {
    return (
        <PhoneFrame>
            <Loading/>
        </PhoneFrame>
    );
};

export default LoadingPage;