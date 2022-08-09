
import PropTypes from 'prop-types'
import StyledErrorPage from "../styled/ErrorPage";

const ErrorPage = ({ title, description }) => {
    return (
        <StyledErrorPage>
            <h1>{title}</h1>
            {
                description && <p>{description}</p>
            }
        </StyledErrorPage>
    );
}

ErrorPage.defaultProps = {
    title: 'Oops!',
    description: 'Something went wrong',
};
ErrorPage.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default ErrorPage;
