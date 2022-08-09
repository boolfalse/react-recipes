
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    h4 {
        color: #fff;
    }
    svg {
        color: #fff;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        svg {
            color: #fff;
        }
        h4 {
            color: #fff;
        }
    }
`;

export default StyledNavLink;
