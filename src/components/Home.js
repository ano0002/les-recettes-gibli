import React from "react";
import RecipeCard from "./RecipeCard";

class Home extends React.Component {
    
    state = {
        recipes : []
    }

    componentDidMount() {
        fetch("https://anatole-sot.xyz/projets/gibli/api/")
        .then(response => response.json())
        .then(data => this.setState({recipes: data}));
    }

    render() {
        return (
            <main id="home">
                {this.state.recipes.map(recipe => {
                    return (
                        <RecipeCard key={recipe.ID} recipe={recipe} />
                    )
                }
                )}
            </main>
        );
    }
}

export default Home;