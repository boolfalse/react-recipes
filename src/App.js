
import Pages from "./layouts/PageWrapper";
import Categories from "./layouts/Categories";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import StyledNav from "./styled/Nav";
import StyledLogo from "./styled/Logo";
import {GiKnifeFork} from "react-icons/gi";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <StyledNav>
                    <GiKnifeFork />
                    <StyledLogo to='/'>React Recipes</StyledLogo>
                </StyledNav>
                <Search />
                <Categories />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
