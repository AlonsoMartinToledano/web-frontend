import React, { useState, useEffect } from "react";
import axios from "axios";

import Place from "./Place";
import "./styles.css";

const Body = props => {
    const {setMode} = props;

    const [place, setPlace] = useState(null);
    const [placeResults, setPlaceResults] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const [placeDetails, setPlaceDetails] = useState(null);
    const [placeName, setPlaceName] = useState(null);

    const baseURLMapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    const baseURLOpenWeather = "https://api.openweathermap.org/data/2.5/onecall"

    useEffect(() => {
        if (place) {
            axios.get(`${baseURLMapBox}${place}.json?access_token=${localStorage.getItem("tokenMapBox")}`).then(response => {
                setPlaceResults(response.data.features);
            })
            return () => {}
        }
    }, [place])

    useEffect(() => {
        if (coordinates) {
            axios.get(`${baseURLOpenWeather}?lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${localStorage.getItem("tokenOpenWeather")}`).then(response => {
                setPlaceDetails(response.data.current);
            })
            return () => {}
        }
    }, [coordinates])

    let places;
    if (placeResults) {
        places = placeResults.map(obj => {
            return <Place name={obj.place_name} key={obj.id} coordinates={[obj.geometry.coordinates[0], obj.geometry.coordinates[1]]}
                    setCoordinates={setCoordinates} setPlaceName={setPlaceName}/>
        })
    }

    let details;
    if (placeDetails) {
        details = <div className="PlaceDetails">
            <div className="Name">{placeName}</div>
            <div className="Info">
                <div>{placeDetails.weather[0].main}</div>
                <div>Temperature: {(placeDetails.temp -273).toFixed(2)} ºC</div>
            </div>
        </div>
    }

    return (
        <div className="Body">
            <div className="Button" onClick={() => {localStorage.removeItem("tokenOpenWeather"); localStorage.removeItem("tokenMapBox"); setMode(0)}}>Log Out</div>
            <div className="Search">
                <input id="search" placeholder="Place to search" className="Input"/>
                <div className="Button" onClick={() => {setPlace(document.getElementById("search").value); setPlaceDetails(null);}}>Search</div>
            </div>
            {places}
            {details}
        </div>
    )
}

export default Body;