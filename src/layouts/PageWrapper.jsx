
import Home from "../pages/Home";
import {Route, Routes, useLocation} from "react-router-dom";
import Cuisine from "../pages/Cuisine";
import Searched from "../pages/Searched";
import Recipe from "../pages/Recipe";
import {AnimatePresence} from "framer-motion";

const PageWrapper = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:category" element={<Cuisine />} />
                <Route path="/searched/:term" element={<Searched />} />
                <Route path="/recipe/:id" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    );
}

export default PageWrapper;
