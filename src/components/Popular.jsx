
import {useEffect, useState} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import StyledGradient from "../styled/Gradient";
import StyledRecipeCard from "../styled/RecipeCard";
import StyledWrapper from "../styled/Wrapper";
import {Link} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

const Popular = () => {
    const [popularState, setPopularState] = useState([]);

    useEffect(() => {
        const lsPopular = localStorage.getItem("popular");
        if (lsPopular) {
            setPopularState(JSON.parse(lsPopular));
        } else {
            getPopular()
                .then(result => {
                    localStorage.setItem("popular", JSON.stringify(result.recipes));
                    setPopularState(result.recipes);
                })
                .catch(err => {
                    console.log(err.message || "Something wrong with the API!");
                });
        }
    }, []);

    const getPopular = async () => {
        const apiGateway = process.env.REACT_APP_SPOONACULAR_API_GATEWAY || 'https://api.spoonacular.com';
        const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY || 'd513a46f99df418eac54eb0025930f5d'
        const data = await fetch(`${apiGateway}/recipes/random?apiKey=${apiKey}&number=9`);
        return await data.json();
    }

    return (
        popularState ? <div>
            <StyledWrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem'
                }}>
                    {popularState.map((recipe) => {
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
        </div> : <ErrorPage title='Oops!' description='Something went wrong' />
    )
}

export default Popular;
