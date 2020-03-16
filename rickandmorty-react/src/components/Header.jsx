import React, { Component } from 'react';
import "./styles.css";
import axios from 'axios';

import StatusFilter from "./StatusFilter";
import TextFilter from "./TextFilter";
import Characters from "./Characters";

class Header extends Component {
    state = {
        character: null
    }

    componentDidUpdate () {
        if (this.props.data.bigCharacter){
            if (!this.state.character || this.props.data.bigCharacter !== this.state.character.id) {
                axios.get('/character/' + this.props.data.bigCharacter).then(response => {
                    this.setState({character: response.data})
                })
            }
        }
    }

    render () {
        const {onStatus} = this.props.onClick;
        const {textFilter, data} = this.props;
        let content = null;
        
        if (this.state.character) {
            content = <Characters image={this.state.character.image} width="200" height="200" name={this.state.character.name}
                        status={this.state.character.status} gender={this.state.character.gender} key={this.state.character.id}/>
        }
        return (
            <div className="Header">
                <StatusFilter onStatus={onStatus} data={data}/>
                <TextFilter textFilter={textFilter}/>
                <div>
                    {content}
                </div>
            </div>
        )
    }
}

export {Header as default};