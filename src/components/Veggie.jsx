
import {useEffect, useState} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import StyledWrapper from "../styled/Wrapper";
import StyledRecipeCard from "../styled/RecipeCard";
import StyledGradient from "../styled/Gradient";
import {Link} from "react-router-dom";

const Veggie = () => {
    const [veggieState, setVeggieState] = useState([]);

    useEffect(() => {
        const lsVeggie = localStorage.getItem("veggie");
        if (lsVeggie) {
            setVeggieState(JSON.parse(lsVeggie));
        } else {
            getVeggie()
                .then(result => {
                    localStorage.setItem("veggie", JSON.stringify(result.recipes));
                    setVeggieState(result.recipes);
                })
                .catch(err => {
                    console.log(err.message || "Something wrong with the API!");
                });
        }
    }, []);

    const getVeggie = async () => {
        const data = await fetch(`${process.env.REACT_APP_SPOONACULAR_API_GATEWAY}/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9&tags=vegetarian`);
        return await data.json();
    }

    return (
        <div>
            <StyledWrapper>
                <h3>Our Vegetarian Picks</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem'
                }}>
                    {veggieState.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <StyledRecipeCard>
                                    <Link to={`/recipe/${recipe.id}`}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.creditsText} />
                                        <StyledGradient />
                                    </Link>
                                </StyledRecipeCard>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </StyledWrapper>
        </div>
    )
}

export default Veggie;
