import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
import axios from 'axios';

import Film from "./Film";
import "./styles.css";

const Body = () => {
    const context = useContext(AppContext);

    const [films, setFilms] = useState(null);

    const baseURL = "https://swapi.dev/api/"

    useEffect(() => {
        axios.get(`${baseURL}films/`).then(response => {
            setFilms(response.data.results);

            

        })
        return () => {}
    }, [])

    if (films) {
        const filmsSort = films.sort((a, b) => {
            if (a.episode_id > b.episode_id) {
                return 1;
            } else {
                return -1;
            }
        })
    
        context.films.set(filmsSort);
    }

    const selecFilm = (film) => {
        context.mode.set(1);
        context.selectedFilm.set(context.films.get.find(elem => elem.episode_id === film));
    }

    return (
        <div className="Body">
            {context.films.get ? context.films.get.map(obj => <Film title={obj.title} episode={obj.episode_id} key={obj.episode_id} selectFilm={selecFilm}/>) : null}
        </div>
    )
}

export default Body;