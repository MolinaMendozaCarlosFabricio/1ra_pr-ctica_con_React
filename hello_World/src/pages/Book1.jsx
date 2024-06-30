import React from "react";
import MainHeader from "../components/moleculas/MainHeader";
import MainFooter from "../components/moleculas/MainFooter";
import InfoContainer from "../components/moleculas/InfoContainer";
import ActionContainer from "../components/moleculas/ActionContainer";
import image from "../photos/codigo_limpio.jpeg";

import "./book1.css"

const Book1 = () => {
    return(
        <div>
            <MainHeader/>
                <div class="box-content">
                    <div class="box-procesoVenta">
                        <div class="container-book">
                            <img src={image}/>
                        </div>
                        <InfoContainer/>
                        <div id="recuadroAction">
                            <ActionContainer/>
                        </div>
                    </div>
                    <div class="information">
                    </div>
                </div>
            <MainFooter/>
        </div>
    );
}

export default Book1;