import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import Soda from './Soda';
import Chips from './Chips';
import Cookies from './Cookies';

const VendingMachine = () => {
    return (
        <div className="vending-machine-container">
            <div className="vending-machine-text">
                <h1>VENDING MACHINE</h1>
                <h2>Hello, how can I help you?</h2>
            </div>
            <img className="vending-machine-img" src="https://ih1.redbubble.net/image.1860124026.7712/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="vending-machine" />
            <div className="vending-machine-links">
                <Link className="vending-machine-links" to="/soda" element={<Soda />}>Soda</Link>
                <Link className="vending-machine-links" to="/chips" element={<Chips />}>Chips</Link>
                <Link className="vending-machine-links" to="/cookies" element={<Cookies />}>Cookies</Link>
            </div>
        </div>
    )
}
export default VendingMachine;