
import Pages from "./layouts/PageWrapper";
import Categories from "./layouts/Categories";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Categories />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
