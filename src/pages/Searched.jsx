
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StyledGrid from "../styled/Grid";
import StyledCard from "../styled/Card";

const Searched = () => {
    const [searchedState, setSearchedState] = useState([]);
    const { term } = useParams();

    const getSearched = async (searchTerm) => {
        const data = await fetch(`${process.env.REACT_APP_SPOONACULAR_API_GATEWAY}/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${searchTerm}&number=9`);
        return await data.json();
    }

    useEffect(() => {
        getSearched(term)
            .then(result => {
                setSearchedState(result.results);
            })
            .catch(err => {
                alert(err.message || "Something wrong with the API!");
            });
    }, [
        term,
    ]);

    return (
        <StyledGrid>{searchedState.map(item => {
            return (
                <StyledCard key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </StyledCard>
            )
        })}</StyledGrid>
    );
}

export default Searched;
