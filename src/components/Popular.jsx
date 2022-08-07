
import {useEffect, useState} from "react";

const Popular = () => {
    const [popularState, setPopularState] = useState([]);

    useEffect(() => {
        getPopular().then(r => console.log(r)).catch(e => console.log(e));
    }, []);

    const getPopular = async () => {
        const data = await fetch(`${process.env.REACT_APP_SPOONACULAR_API_URL}/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`);
        const result = await data.json();
        setPopularState(result.recipes);
    }

    return (
        <div>
            {popularState.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.creditsText} />
                </div>
            ))}
        </div>
    )
}

export default Popular;
