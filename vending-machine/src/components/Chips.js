import React from 'react';
import { Link } from 'react-router-dom';
import VendingMachine from './VendingMachine';

const Chips = () => {
    return (
        <div>
            <h1>Chips!</h1>
            <img src="https://m.media-amazon.com/images/I/814dhxUSG+L._AC_UF894,1000_QL80_.jpg" alt="chips"/>
            <Link className="back" to="/" element={<VendingMachine />}>Back</Link>
        </div>
    )
}
export default Chips;