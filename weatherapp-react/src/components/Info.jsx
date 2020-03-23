import React, { Component } from 'react';
import "./styles.css";

class Info extends Component {
    render () {
        const {name, status, temperature, rain} = this.props;
        return (
            <div className="Info">
                <div className="InfoName">{name}</div>
                <div className="Details">
                    <div>{status}</div>
                    <div>Temperature: {temperature}ºC</div>
                    <div>Rain probability: {rain * 100}%</div>
                </div>
            </div>
        )
    }
}

export {Info as default};