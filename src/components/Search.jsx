
import StyledSearchForm from "../styled/SearchForm";
import {FaSearch} from "react-icons/fa";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [termState, setTermState] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${termState}`);
    }

    return (
        <StyledSearchForm onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input onChange={(e) => {setTermState(e.target.value)}}
                       type="text"
                       value={termState}
                       placeholder="Search..." />
            </div>
        </StyledSearchForm>
    );
}

export default Search;
