
import styled from "styled-components";

const StyledSearchForm = styled.form`
    margin: 0 2rem;
    div {
        position: relative;
        width: min(550px, 100%);
        margin: 0 auto;
    }
    input {
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`;

export default StyledSearchForm;
