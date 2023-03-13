import React from 'react';
import logo from '../assets/images/logo.svg';
import iconCart from '../assets/images/icon_cart.svg';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo header__logo">
        <img src={logo} alt="Логотип Реакт Пицца" className="logo__image" />
        <div className="logo__block">
          <span className="logo__title">React Pizza</span>
          <span className="logo__subtitle">самая вкусная пицца только у нас</span>
        </div>
      </a>
      <button type="button" className="header__cart button button_type_primary">
        <div className="header__cart-block">
          <span className="header__cart-text">0 ₽</span>
        </div>
        <div className="header__cart-block">
          <span className="header__cart-text">
            <img src={iconCart} alt="Иконка корзины" className="header__cart-icon" />0
          </span>
        </div>
      </button>
    </header>
  );
}

export default Header;
