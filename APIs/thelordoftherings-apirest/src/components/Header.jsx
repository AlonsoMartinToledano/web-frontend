import React, { useEffect, useContext } from "react";
import AppContext from "../AppContext";
import axios from 'axios';

import "./styles.css";

const Header = () => {
    const context = useContext(AppContext);

    const baseURL = "https://the-one-api.herokuapp.com/v1/"

    useEffect(() => {
        if (context.mode.get === 2) {
            axios.get(`${baseURL}book`, { headers: { Authorization: `Bearer ${context.token.get}` }}).then(response => {
                context.data.set(response.data.docs);
            })
        } else if (context.mode.get === 3) {
            axios.get(`${baseURL}movie`, { headers: { Authorization: `Bearer ${context.token.get}` }}).then(response => {
                context.data.set(response.data.docs);
            })
        } else if (context.mode.get === 4) {
            axios.get(`${baseURL}character`, { headers: { Authorization: `Bearer ${context.token.get}` }}).then(response => {
                context.data.set(response.data.docs);
            })
        } else if (context.mode.get === 5) {
            axios.get(`${baseURL}quote`, { headers: { Authorization: `Bearer ${context.token.get}` }}).then(response => {
                context.data.set(response.data.docs);
            })
        }
        return () => {}
    }, [context.mode.get])

    return (
        <div className="Header">
            <div className={context.mode.get === 2 ? "ButtonSelected" : "Button"} onClick={() => context.mode.set(2)}>Books</div>
            <div className={context.mode.get === 3 ? "ButtonSelected" : "Button"} onClick={() => context.mode.set(3)}>Movies</div>
            <div className={context.mode.get === 4 ? "ButtonSelected" : "Button"} onClick={() => context.mode.set(4)}>Characters</div>
            <div className={context.mode.get === 5 ? "ButtonSelected" : "Button"} onClick={() => context.mode.set(5)}>Quotes</div>
        </div>
    )
}

export default Header;