import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import VendingMachine from './VendingMachine';

const Cookies = () => {
    const [cookies, setCookies] = useState(1);
    // when buy more cookies, add more images with random x and y position
    const buyMoreCookies = () => {
        setCookies((prevCookies) => {
            const newCount = prevCookies + 1;
            console.log(newCount);
            if (newCount >= 5) {
                alert("You now have a stomache ache >:(");
            }
            return newCount;
        });

        const newCookie = document.createElement("img");
        newCookie.src = "https://m.media-amazon.com/images/I/71Ews1oivwL.jpg";
        newCookie.style.position = "absolute";
        newCookie.style.left = Math.random() * window.innerWidth + "px";
        newCookie.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(newCookie);

        setTimeout(() => {
            setCookies((prevCookies) => prevCookies - 1);
            document.body.removeChild(newCookie);
            console.log(cookies);
        }, 1000);
    };


    return (
        <div>
            <h1>Cookies!</h1>
            <h2>Please Don't Buy Too Many Cookies...</h2>
            <img src="https://m.media-amazon.com/images/I/71Ews1oivwL.jpg" alt="cookies"/>
            <button onClick={buyMoreCookies}>Buy more cookies</button>
            <Link className="back" to="/" element={<VendingMachine />}>Back</Link>
        </div>
    )
}
export default Cookies;