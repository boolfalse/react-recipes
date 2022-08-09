
import {FaHamburger, FaPizzaSlice} from "react-icons/fa";
import {GiChopsticks, GiNoodles} from "react-icons/gi";
import StyledCategoriesList from "../styled/CategoriesList";
import StyledNavLink from "../styled/NavLink";

const Categories = () => {
    return (
        <StyledCategoriesList>
            <StyledNavLink to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </StyledNavLink>
            <StyledNavLink to={'/cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </StyledNavLink>
            <StyledNavLink to={'/cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </StyledNavLink>
            <StyledNavLink to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </StyledNavLink>
        </StyledCategoriesList>
    );
}

export default Categories;
