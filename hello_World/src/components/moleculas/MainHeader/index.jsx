import React from "react";
import './index.css'
import Tittle from "../../atomo/Tittle";

const MainHeader = () => {
    return (
        <header id="bannerDePagina">
            <Tittle/>
            <div id="btnsBanner">
                <button className="btnsSesion">Iniciar sesión</button>
                <button className="btnsSesion">Registrarse</button>
            </div>  
        </header>
    );
}
 
export default MainHeader;