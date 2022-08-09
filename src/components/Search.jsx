
import StyledSearchForm from "../styled/SearchForm";
import {FaSearch} from "react-icons/fa";

const Search = () => {
    return (
        <StyledSearchForm>
            <div>
                <FaSearch />
                <input type="text" placeholder="Search..." />
            </div>
        </StyledSearchForm>
    );
}

export default Search;
