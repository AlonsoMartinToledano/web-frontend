import React, { Component } from 'react';
import "./styles.css";

class Results extends Component {
    render () {
        const {name, latitude, longitude, endpointDarkSky} = this.props;
        const {onPlace} = this.props.onClick;

        const urlDarkSky = `${endpointDarkSky}${longitude},${latitude}?units=si`;

        return (
            <div className="Result">
                <div className="Name" onClick={() => onPlace(urlDarkSky, name)}>{name}</div>
            </div>
        )
    }
}

export {Results as default};