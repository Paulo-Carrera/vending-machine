import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Cookies from './Cookies';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>

            <NavBar />

            <Routes>
                <Route path="/" element={<VendingMachine />} />
                <Route path="/soda" element={<Soda />} />
                <Route path="/chips" element={<Chips />} />
                <Route path="/cookies" element={<Cookies />} />
            </Routes>

        </div>
    )
}

export default Home;