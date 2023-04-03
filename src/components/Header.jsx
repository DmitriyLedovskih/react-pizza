import React from "react";
import logo from "../assets/images/logo.svg";
import iconCart from "../assets/images/icon_cart.svg";
import { Link } from "react-router-dom";
import Search from "./SearchForm";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";

function Header() {
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((acc, item) => acc + item.count, 0);
  return (
    <header className="header">
      <div className="header__row">
        <Link to="/" className="logo header__logo">
          <img src={logo} alt="Логотип Реакт Пицца" className="logo__image" />
          <div className="logo__block">
            <h1 className="logo__title">React Pizza</h1>
            <p className="logo__subtitle">самая вкусная пицца только у нас</p>
          </div>
        </Link>
        <Link to="/cart" className="header__cart button button_type_primary">
          <div className="header__cart-block">
            <span className="header__cart-text">{totalPrice} ₽</span>
          </div>
          <div className="header__cart-line"></div>
          <div className="header__cart-block">
            <span className="header__cart-text">
              <img
                src={iconCart}
                alt="Иконка корзины"
                className="header__cart-icon"
              />
              {totalCount}
            </span>
          </div>
        </Link>
      </div>
      <Search />
    </header>
  );
}

export default Header;
