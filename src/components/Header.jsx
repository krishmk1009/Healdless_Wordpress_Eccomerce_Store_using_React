import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './styles/Header.css'; // Importing the CSS file for styling

const Header = () => {
    const value = localStorage.getItem("user")
    const [user, setUser] = useState(value);
    useEffect(() => {

    }, [])

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user')
        setUser(null);
    }

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/create">Create Post</Link></li>
                <li className="nav-item"><Link to="/products">Products</Link></li>
            </ul>
            <div className="auth-buttons">
                {

                    user ? <button className="login-button" onClick={handleLogout}> Logout </button> :
                        (
                            <>
                                <button className="login-button"> <Link to="/login">Login</Link> </button>
                                <button className="signup-button"><Link to="/register">Register</Link></button>
                            </>
                        )

                }

            </div>
        </nav>
    );
};

export default Header;
