import React from 'react';
import { Link } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Cookies from './Cookies';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <Link to="/" element={<VendingMachine />}>Machine</Link>
            <Link to="/soda" element={<Soda />}>Soda</Link>
            <Link to="/chips" element={<Chips />}>Chips</Link>
            <Link to="/cookies" element={<Cookies />}>Cookies</Link>
        </nav>
    )
}
export default NavBar;