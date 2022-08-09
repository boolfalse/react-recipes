
import Home from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import Cuisine from "../pages/Cuisine";

const PageWrapper = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:category" element={<Cuisine />} />
        </Routes>
    );
}

export default PageWrapper;
