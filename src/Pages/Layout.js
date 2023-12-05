import { Outlet } from "react-router-dom";
import StyledLink from "../Components/StyledLink";

const Nav = () => {
    return (
        <nav style={{ display: 'flex', gap: 24, justifyContent: 'right', fontWeight: 'bold'}}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
        </nav>
    )
};

const Layout = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <Outlet />
            </header>
        </div>
    )
};

export default Layout;