
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Cuisine = () => {
    const [cuisineState, setCuisineState] = useState([]);
    let {
        category: categoryParam
    } = useParams();

    const getCuisine = async (category) => {
        const data = await fetch(`${process.env.REACT_APP_SPOONACULAR_API_GATEWAY}/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${category}&number=9`);
        return await data.json();
    }

    useEffect(() => {
        getCuisine(categoryParam)
            .then(result => {
                setCuisineState(result.results);
            })
            .catch(err => {
                alert(err.message || "Something wrong with the API!");
            });
    }, [
        categoryParam,
    ]);

    return (
        <div>
            <h2>{cuisineState.length}</h2>
            <h2>{categoryParam}</h2>
        </div>
    );
}

export default Cuisine;
