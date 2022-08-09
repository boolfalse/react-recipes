
import Home from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import Cuisine from "../pages/Cuisine";
import Searched from "../pages/Searched";

const PageWrapper = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:category" element={<Cuisine />} />
            <Route path="/searched/:term" element={<Searched />} />
        </Routes>
    );
}

export default PageWrapper;
