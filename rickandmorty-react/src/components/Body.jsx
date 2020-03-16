import React, { Component } from 'react';
import "./styles.css";
import axios from 'axios';

import Characters from "./Characters"

class Body extends Component {
    state = {
        characters: null
    }

    componentDidMount() {
        axios.get('/character/').then(response => {
            this.setState({characters: response.data.results});
        })
    }

    render() {
        const {onBigCharacter} = this.props.onClick;

        let content = "";

        if(this.state.characters) {
            let filtered = this.state.characters;
        
            if (this.props.data.status === 1) {
                filtered = filtered.filter(char => char.status === "Alive");
            }
            else if (this.props.data.status === 2) {
                filtered = filtered.filter(char => char.status === "Dead");
            }
        
            if (this.props.data.textFilter != null) {
                filtered = filtered.filter(char => char.name.includes(this.props.data.textFilter));
            }

            content = filtered.map(obj => {
                return <Characters onBigCharacter={onBigCharacter} image={obj.image} name={obj.name} status={obj.status} gender={obj.gender} id={obj.id} key={obj.id}/>
            })
        }

        return (
            <div className="Body">
                {content}
            </div>
        )
    }
}

export {Body as default};