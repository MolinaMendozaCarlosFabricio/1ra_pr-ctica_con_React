import React from "react";
import "./index.css";

const ActionContainer = () => {
    return (
        <div class="actions">
            <div class="sinopsis">
                <h4>Sinopsis</h4>
                <p>Cada año, se invierten incontables horas y se desperdician recursos debido a código mal escrito, lo que disminuye la productividad, genera fallos graves y puede comprometer la estabilidad de una organización o empresa. El experto en software Robert C. Martin, junto con sus colegas de Object Mentor, ofrece técnicas y metodologías ágiles para mejorar el código de manera continua y crearlo de forma adecuada</p>
            </div>
            <div class="action-buy">
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad"/>
            </div>
            <button id="buy">Comprar</button>
        </div>
    );
}

export default ActionContainer;