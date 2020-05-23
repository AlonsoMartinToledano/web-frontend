import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
import axios from 'axios';

import CharacterDetails from "./CharacterDetails";
import "./styles.css";

const Right = () => {
    const context = useContext(AppContext);

    const [name, setName] = useState(null);
    const [search, setSearch] = useState(null);
    const [status, setStatus] = useState(2);
    const [characterDetails, setCharacterDetails] = useState(null);

    const baseURL = "https://rickandmortyapi.com/api/character/"

    const searchHandler = event => {
        setName(event.target.value);
    }

    useEffect(() => {
        if (search) {
            axios.get(`${baseURL}?name=${search}`).then(response => {
                context.charactersData.set(response.data.results);
            })
            return () => {}
        }
    }, [search])

    let statusAux;
    if (status === 0){
        statusAux = "alive";
    } else if (status === 1) {
        statusAux = "dead";
    } else {
        statusAux = "";
    }
    useEffect(() => {
        axios.get(`${baseURL}?status=${statusAux}`).then(response => {
            context.charactersData.set(response.data.results);
        })
        return () => {}
    }, [status])

    useEffect(() => {
        if (context.characterId.get) {
            axios.get(baseURL + context.characterId.get).then(response => {
                setCharacterDetails(response.data);
            })
            return () => {}
        }
    }, [context.characterId.get])

    return (
        <div className="Right">
            <div className="StatusButtons">
                <div className={status === 0 ? "ButtonSelected" : "Button"} onClick={() => setStatus(0)}>Alive</div>
                <div className={status === 1 ? "ButtonSelected" : "Button"} onClick={() => setStatus(1)}>Dead</div>
                <div className={status === 2 ? "ButtonSelected" : "Button"} onClick={() => setStatus(2)}>All</div>
            </div>

            <div className="SearchBar">
                <input className="Search" placeholder="Search a character" onChange={searchHandler}/>
                <div className="MagnifyingGlass" onClick={() => setSearch(name)}>🔍</div>
            </div>

            {characterDetails ? <CharacterDetails image={characterDetails.image} name={characterDetails.name}
                                gender={characterDetails.gender} status={characterDetails.status} key={characterDetails.id}/> : null}
        </div>
    )
}

export default Right;