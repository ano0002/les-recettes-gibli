import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
        <Link to={`/recipe/${recipe.ID}`}>
            <h2>{recipe.Title}</h2>
            <ul>
                {recipe.Ingredients.split('\u001f').map((step) => {
                    return <li>{step}</li>
                })}
            </ul>
        </Link>
        </div>
    );
};

export default RecipeCard;