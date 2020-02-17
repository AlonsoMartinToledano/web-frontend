import React from 'react';
import "./styles.css";

import StatusFilter from "./StatusFilter";
import TextFilter from "./TextFilter";
import Characters from "./Characters";

const Header = (props) => {
    const {onStatus} = props.onClick;
    const {textFilter, data} = props;
    let litte;
    
    if (data.bigCharacter != null) {
        litte = data.characters.find(char => char.name === data.bigCharacter.name);
    }
    
    return (
        <div className="Header">
            <StatusFilter onStatus={onStatus} data={data}/>
            <TextFilter textFilter={textFilter}/>
            {data.bigCharacter === null ? null :
                <div>
                    <Characters image={litte.image} width="200" height="200" name={litte.name} status={litte.status} gender={litte.gender} key={litte.id}/>
                </div>
            }
        </div>
    )
}

export {Header as default};