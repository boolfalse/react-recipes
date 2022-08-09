
import Home from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import Cuisine from "../pages/Cuisine";
import Searched from "../pages/Searched";
import Recipe from "../pages/Recipe";

const PageWrapper = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:category" element={<Cuisine />} />
            <Route path="/searched/:term" element={<Searched />} />
            <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
    );
}

export default PageWrapper;
