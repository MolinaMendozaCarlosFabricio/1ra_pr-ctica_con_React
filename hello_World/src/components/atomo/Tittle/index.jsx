import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import "./index.css"

const Tittle = () => {
    return(
    <a id="tituloPagina">
        <span><FontAwesomeIcon icon={faRocket} /></span>
        <h2>Hello World</h2>
    </a>
    );
}

export default Tittle;