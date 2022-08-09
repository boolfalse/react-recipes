
import Pages from "./layouts/PageWrapper";
import Categories from "./layouts/Categories";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Search />
                <Categories />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
