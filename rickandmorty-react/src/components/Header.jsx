import React from 'react';
import "./styles.css";

import StatusFilter from "./StatusFilter";
import TextFilter from "./TextFilter";

const Header = (props) => {
    const {onStatus} = props.onClick;
    const {textFilter, data} = props;

    return (
        <div className="Header">
            <StatusFilter onStatus={onStatus} data={data}/>
            <TextFilter textFilter={textFilter}/>
        </div>
    )
}

export {Header as default};