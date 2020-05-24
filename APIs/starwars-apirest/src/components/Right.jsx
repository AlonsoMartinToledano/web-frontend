import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
import axios from 'axios';

import "./styles.css";

const Right = () => {
    const context = useContext(AppContext);

    const [charactersList, setCharactersList] = useState(null);

    const baseURL = "https://swapi.dev/api/"

    const characters = [];

    useEffect(() => {
        if (context.selectedFilm.get) {
            context.selectedFilm.get.characters.map(obj => {
                characters.push(axios.get(obj));
            })

            axios.all(characters).then(axios.spread((...responses) => {
                setCharactersList(responses);
            })).catch(errors => {})


            axios.get(`${baseURL}films/`).then(response => {
                context.films.set(response.data.results);
            })
            return () => {}
        }
    }, [context.selectedFilm.get])

    return (
        <div className="Right">
            <div className="Close" onClick={() => context.mode.set(0)}>Close</div>
            <div className="FilmDetails">
                <div className="Info">Title: {context.selectedFilm.get.title}</div>
                <div className="Info">Episode: {context.selectedFilm.get.episode_id}</div>
                <div className="Info">Opening: {context.selectedFilm.get.opening_crawl}</div>
                <div className="Info">Director: {context.selectedFilm.get.director}</div>
                <div className="Info">Release date: {context.selectedFilm.get.release_date}</div>

                <div className="Characters">
                    {charactersList ? charactersList.map(obj => {
                        return <div className="Info">Name: {obj.data.name}</div>
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default Right;