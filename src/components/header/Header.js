import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <header className="site-header">
            <div className="site-header__container">
                <Link to='/' className="site-header__logo">
                    Book store
                </Link>

                <div className="site-header__cart">
                    <Link className="cart" to='/cart'>
                        <i className="cart__icon fas fa-shopping-cart"></i>
                        <span className="cart__total-items">(5)</span>
                        <span className="cart__total-price">$500</span>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export {Header};
