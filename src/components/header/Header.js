import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css';

const Header = ({cartItems}) => {
    return (
        <header className="site-header">
            <div className="site-header__container">
                <Link to='/' className="site-header__logo">
                    Book store
                </Link>

                <div className="site-header__cart">
                    <Link className="cart" to='/cart'>
                        <i className="cart__icon fas fa-shopping-cart"></i>
                        <span className="cart__total-items">({cartItems.reduce((acc, cur) => acc + cur.count, 0)})</span>
                        <span className="cart__total-price">${cartItems.reduce((acc, cur) => acc + cur.total, 0)}</span>
                    </Link>
                </div>
            </div>
        </header>
    )
};

let mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
};

export default connect(mapStateToProps)(Header);
