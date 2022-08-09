
import styled from "styled-components";
import {motion} from "framer-motion";

const StyledGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

export default StyledGrid;
