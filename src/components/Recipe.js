import React from "react";
import { useParams } from "react-router-dom";



const Recipe = (props) => {
    let params = useParams();
    console.log(params.id);
    return (
        <main id="recipe">
            <h1>Recipe</h1>
            <p>Recipe ID: {params.id}</p>
        </main>
    );
}

export default Recipe;