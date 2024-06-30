import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons'
import MainFooter from "../components/moleculas/MainFooter";
import "./login.css"
import Tittle from "../components/atomo/Tittle";

const Login = () => {
    return (
        <main>
            <div id="tittle">
               <Tittle/> 
            </div>
            <div className="container">
                <div className="apartadoInicio">
                    <div class="box-user">
                        <span><FontAwesomeIcon icon={faUser} id="icon-person"/></span>
                    </div>
                    <form class="campoInfo">
                        <div class="email">
                            <div class="icon-email">
                                <span class="material-icons" id="people"><FontAwesomeIcon icon={faUser}/></span>
                            </div>
                            <input type="text" id="email" placeholder="Dirección de correo electrónico"/>
                        </div>
                        <div class="password">
                            <div class="icon-password">
                                <span class="material-icons" id="lock"><FontAwesomeIcon icon={faLock}/></span>
                            </div>
                            <input type="password" id="password" placeholder="Contraseña"/>
                        </div>
                        <button id="btn-sesion" type="button">Iniciar Sesión</button>
                    </form>
                </div>
                
            </div>
            <MainFooter/>
        </main>
    );
}

export default Login;