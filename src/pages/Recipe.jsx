
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StyledRecipeDetails from "../styled/RecipeDetails";
import StyledRecipeDetailsInfo from "../styled/DetailsInfo";
import StyledDetailsButton from "../styled/DetailsButton";

const Recipe = () => {
    const [activeTabState, setActiveTabState] = useState('ingredients');
    const [recipeDetailsState, setRecipeDetailsState] = useState(null);
    const { id } = useParams();

    const getRecipeDetails = async (recipeId) => {
        const apiGateway = process.env.REACT_APP_SPOONACULAR_API_GATEWAY || 'https://api.spoonacular.com';
        const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY || 'd513a46f99df418eac54eb0025930f5d'
        const data = await fetch(`${apiGateway}/recipes/${recipeId}/information?apiKey=${apiKey}`);
        return await data.json();
    }

    useEffect(() => {
        getRecipeDetails(id)
            .then(result => {
                setRecipeDetailsState(result);
            })
            .catch(err => {
                console.log(err.message || "Something wrong with the API!");
            }
        );
    }, [ id ]);

    return recipeDetailsState ? (
        <StyledRecipeDetails>
            <div>
                <h2>{recipeDetailsState.title}</h2>
                <img src={recipeDetailsState.image} alt={recipeDetailsState.title} />
            </div>
            <StyledRecipeDetailsInfo>
                <StyledDetailsButton onClick={() => setActiveTabState('ingredients')} className={activeTabState === "ingredients" ? "active" : ""}>
                    Ingredients
                </StyledDetailsButton>
                <StyledDetailsButton onClick={() => setActiveTabState('instructions')} className={activeTabState === "instructions" ? "active" : ""}>
                    Instructions
                </StyledDetailsButton>
                {
                    activeTabState === 'ingredients' && (
                        <ul>
                            {recipeDetailsState.extendedIngredients.map(({ id, original }) => (
                                <li key={id}>{original}</li>
                            ))}
                        </ul>
                    )
                }
                {
                    activeTabState === 'instructions' && (
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: recipeDetailsState.summary }}></p>
                            <p dangerouslySetInnerHTML={{ __html: recipeDetailsState.instructions }}></p>
                        </div>
                    )
                }
            </StyledRecipeDetailsInfo>
        </StyledRecipeDetails>
    ) : 'Loading...';
}

export default Recipe;
