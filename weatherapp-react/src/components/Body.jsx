import React, { Component } from 'react';
import "./styles.css";
import axios from 'axios';

import Results from './Results';
import Info from './Info';

class Body extends Component {
    state = {
        placeToSearch: null,
        urlMapBox: null,
        places: null,
        place: null,
        urlDarkSky: null,
        info: null,
        counter: 0
    }

    searchBoxHandler (event) {
        const placeToSearch = event.target.value;
        this.setState({placeToSearch});
    }

    onSearchButtonHandler (baseURLMapBox, tokenMapBox) {
        if(this.state.placeToSearch){
            const location = this.state.placeToSearch;
            const urlMapBox = `${baseURLMapBox}${location}.json?access_token=${tokenMapBox}`;
            this.setState({urlMapBox});
            this.setState({counter: 1});
            this.setState({info: null});
            this.setState({place: null});
        }
    }

    onPlaceHandler = (urlDarkSky, place) => {
        this.setState({urlDarkSky});
        this.setState({place});
        this.setState({counter: 2});
    }

    componentDidUpdate () {
        if(this.state.urlMapBox && this.state.counter === 1) {
            axios.get(this.state.urlMapBox).then(response => {
                this.setState({counter: 0});
                this.setState({places: response.data.features})
            })
        }

        if(this.state.urlDarkSky && this.state.counter === 2){
            axios.get(`https://cors-anywhere.herokuapp.com/${this.state.urlDarkSky}`).then(response => {
                this.setState({counter: 0});
                this.setState({info: response.data})
            })
        }
    }

    render () {
        const baseURLMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
        const tokenMapBox = 'pk.eyJ1IjoiYWdlbnRlYWxmYSIsImEiOiJjazFhbzB3MjMwbHBmM2Nxd3lyZ3FqaTBqIn0.JpWC1jHr0UQY1NWDVsnc3w';

        const baseURLDarkSky = 'https://api.darksky.net/';
        const tokenDarkSky = '1ee0ccda03643104152c845cb3b52622/';
        const endpointDarkSky = `${baseURLDarkSky}forecast/${tokenDarkSky}`;

        let results = "";

        if (this.state.places){
            results = this.state.places.map(obj => {
                return <Results onClick={{onPlace: this.onPlaceHandler}} name={obj.place_name} latitude={obj.geometry.coordinates[0]}
                        longitude={obj.geometry.coordinates[1]} endpointDarkSky={endpointDarkSky} key={obj.id}/>
            })
        }

        return (
            <div className="Body">
                <div className="Search">
                    <input className="SearchBox" onChange={(event) => this.searchBoxHandler(event)} />
                    <div className="SearchButton" onClick={() => this.onSearchButtonHandler(baseURLMapBox, tokenMapBox)}>
                        Search
                    </div>
                </div>
                <div>{results}</div>
                {this.state.info ? <div className="Info">
                    <Info name={this.state.place} status={this.state.info.currently.summary} temperature={this.state.info.currently.temperature}
                            rain={this.state.info.currently.precipProbability}/>
                </div> : null}
            </div>
        )
    }
}

export {Body as default};