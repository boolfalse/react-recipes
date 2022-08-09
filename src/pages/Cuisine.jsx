
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import StyledGrid from "../styled/Grid";
import StyledCard from "../styled/Card";

const Cuisine = () => {
    const [cuisineState, setCuisineState] = useState([]);
    let {
        category: categoryParam
    } = useParams();

    const getCuisine = async (category) => {
        const apiGateway = process.env.REACT_APP_SPOONACULAR_API_GATEWAY || 'https://api.spoonacular.com';
        const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY || 'd513a46f99df418eac54eb0025930f5d'
        const data = await fetch(`${apiGateway}/recipes/complexSearch?apiKey=${apiKey}&cuisine=${category}&number=8`);
        return await data.json();
    }

    useEffect(() => {
        getCuisine(categoryParam)
            .then(result => {
                setCuisineState(result.results);
            })
            .catch(err => {
                console.log(err.message || "Something wrong with the API!");
            });
    }, [
        categoryParam,
    ]);

    return (
        <StyledGrid animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.25}}>
            {cuisineState.map(recipe => {
                return (<StyledCard key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h4>{recipe.title}</h4>
                    </Link>
                </StyledCard>)
            })}
        </StyledGrid>
    );
}

export default Cuisine;
