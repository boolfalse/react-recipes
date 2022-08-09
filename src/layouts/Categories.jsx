
import {FaHamburger, FaPizzaSlice} from "react-icons/fa";
import {GiChopsticks, GiNoodles} from "react-icons/gi";
import StyledCategoriesList from "../styled/CategoriesList";
import {NavLink} from "react-router-dom";

const Categories = () => {
    return (
        <StyledCategoriesList>
            <NavLink to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </StyledCategoriesList>
    );
}

export default Categories;
