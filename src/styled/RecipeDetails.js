
import styled from "styled-components";

const StyledRecipeDetails = styled.div`
    margin: 10rem inherit 5rem;
    display: flex;
    @media (max-width: 1068px) {
        flex-direction: column;
    }
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }
    h2 {
        margin-bottom: 2rem;
    }
    ul {
        margin-top: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    p {
        margin: 1rem 0;
        font-size: 1.1rem;
        line-height: 1.8rem;
        &:first-child {
            margin-top: 2rem;
        }
    }
`;

export default StyledRecipeDetails;
