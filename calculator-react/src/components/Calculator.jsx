import React from 'react';
import "./styles.css";

import Header from "./Header";
import Buttons from "./Buttons";

const Calculator = (props) => {
    const {data, onClick} = props;
    return (
        <div className="Calculator">
            <Header data={data} onClick={onClick}/>
            <Buttons data={data} onClick={onClick} />
        </div>
        
    )
}

export {Calculator as default};