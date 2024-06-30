import React from "react";
import DetallesPrecio from "../../atomo/DetallesPrecio";
import CaracteristicasProducto from "../../atomo/CaracteristicasProducto";
import "./index.css"

const InfoContainer = () => {
    return(
        <div class="main">
            <div class="qualification">
                <p>Codigo limpio</p>
            </div>
            <p id="precio-desc">$1224</p>
            <div id="line"></div>
            <div id="info">
                <div id="infoPrecio">
                    <DetallesPrecio/>
                </div>
                <CaracteristicasProducto/>
            </div>
            
        </div>
    );
}

export default InfoContainer;