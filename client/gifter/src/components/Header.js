import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { UserContext } from "../providers/UserProvider";

const Header = () => {
    const { logout } = useContext(UserContext)

    const handleLogout = () => {
        logout()
    }
    return (
        <nav className="navbar navbar-expand navbar-dark bg-info">
            <Link to="/" className="navbar-brand">
                GiFTER
            </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Feed
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts/add" className="nav-link">
                        New Post
                    </Link>
                </li>
                <li>
                    <Button onClick={handleLogout}>Logout</Button>
                </li>
            </ul>
        </nav>
    );
};

export default Header;