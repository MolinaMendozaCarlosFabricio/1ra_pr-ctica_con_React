import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import './index.css'

const MainHeader = () => {
    return (
        <header id="bannerDePagina">
            <a id="tituloPagina">
                <span><FontAwesomeIcon icon={faRocket} /></span>
                <h2>Hello World</h2>
            </a>
            <div id="btnsBanner">
                <button className="btnsSesion">Iniciar sesión</button>
                <button className="btnsSesion">Registrarse</button>
            </div>  
        </header>
    );
}

export default MainHeader;