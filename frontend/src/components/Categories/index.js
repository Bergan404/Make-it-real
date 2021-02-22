import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Categories.css"

function Categories() {

    return (
        <div className="categories">
            <ul>
                <li><NavLink exact to="/">Clothing & Shoes</NavLink></li>
                <li><NavLink exact to="/">Home & Living</NavLink></li>
                <li><NavLink exact to="/">Arts & Collectibles</NavLink></li>
                <li><NavLink exact to="/">Toys & Entertainment</NavLink></li>
            </ul>
        </div>
    );
}

export default Categories;
