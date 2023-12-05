import { Link } from 'react-router-dom';

const StyledLink = (props) => {
    const { children } = props;

    return (
        <Link
            {...props}
            style={{
                color: 'black',
                textDecoration: 'none',
                ...props.style
            }}
        >
            {children}
        </Link>
    );
}

export default StyledLink;