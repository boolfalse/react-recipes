
import {useEffect, useState} from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
                    alert(err.message || "Something wrong with the API!");
                });
        }
    }, []);

    const getPopular = async () => {
        const data = await fetch(`${process.env.REACT_APP_SPOONACULAR_API_GATEWAY}/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`);
        return await data.json();
    }

    return (
        <div>
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
                                <StyledCard>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.creditsText} />
                                    <StyledGradient />
                                </StyledCard>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </StyledWrapper>
        </div>
    )
}

const StyledWrapper = styled.div`
    margin: 4rem 0rem;
`;
const StyledCard = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    
    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: #fff;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const StyledGradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;

export default Popular;
