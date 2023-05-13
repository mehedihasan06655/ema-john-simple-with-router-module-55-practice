import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(result=>{})
        .catch(error=>{console.error(error)})
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span>{user.email}</span>
                }
                {
                    user && <button onClick={handleLogout}>Sign Out</button>
                }
            </div>
        </nav>
    );
};

export default Header;