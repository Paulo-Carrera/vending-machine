import React from 'react';
import { Link } from 'react-router-dom';
import VendingMachine from './VendingMachine';

const Soda = () => {
    return (
        <div>
            <h1>Soda!</h1>
            <img src="https://spacedoutmunchies.com/cdn/shop/products/image_adaf7a56-f652-4802-a5c9-7a36050c9d5a_1024x1024@2x.jpg?v=1643328696" alt="soda"/>
            <Link className="back" to="/" element={<VendingMachine />}>Back</Link>
        </div>
    )
}

export default Soda;