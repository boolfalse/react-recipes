
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import StyledGrid from "../styled/Grid";
import StyledCard from "../styled/Card";

const Searched = () => {
    const [searchedState, setSearchedState] = useState([]);
    const { term } = useParams();

    const getSearched = async (searchTerm) => {
        const data = await fetch(`${process.env.REACT_APP_SPOONACULAR_API_GATEWAY || 'https://api.spoonacular.com'}/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY || 'd513a46f99df418eac54eb0025930f5d'}&query=${searchTerm}&number=9`);
        return await data.json();
    }

    useEffect(() => {
        getSearched(term)
            .then(result => {
                setSearchedState(result.results);
            })
            .catch(err => {
                console.log(err.message || "Something wrong with the API!");
            });
    }, [
        term,
    ]);

    return (
        <StyledGrid>{searchedState.map(recipe => {
            return (
                <StyledCard key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h4>{recipe.title}</h4>
                    </Link>
                </StyledCard>
            )
        })}</StyledGrid>
    );
}

export default Searched;
