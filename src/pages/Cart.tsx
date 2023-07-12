import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";
import { removeAllItems, selectCart } from "../redux/slices/cartSlice";

type CartItem = {
  id: string;
  images: string[];
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  info: string[];
  count: number;
  reviews: number;
};

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce(
    (acc: number, item: { count: number }) => acc + item.count,
    0
  );

  const dispatch = useDispatch();
  return (
    <div className="cart">
      {items.length > 0 ? (
        <>
          <div className="cart__row cart__header">
            <h1 className="title cart__title">Корзина</h1>
            <button
              type="button"
              className="cart__button-clear button button_type_primary"
              onClick={() => dispatch(removeAllItems())}
            >
              Очистить корзину
            </button>
          </div>
          <div className="cart__cards">
            {items.map((item: CartItem) => (
              <CartCard key={item.id} {...item} />
            ))}
          </div>
          <div className="cart__row cart__footer">
            <p className="cart__text">
              Всего пицц:
              <span className="cart__text-label">{totalCount} шт.</span>
            </p>
            <p className="cart__text">
              Сумма заказа:
              <span className="cart__text-label">{totalPrice} ₽</span>
            </p>
          </div>
          <div className="cart__row cart__footer">
            <Link to="/" className="button button_type_light cart__button">
              Вернуться назад
            </Link>
            <Link
              to="#"
              className="button button_type_primary-outlined cart__button"
            >
              Оплатить
            </Link>
          </div>
        </>
      ) : (
        <div className="cart__empty">
          <h1 className="title cart__empty-title">Корзина пуста ☹️</h1>
          <p className="cart__empty-descr">
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <button
            className="cart__empty-button button button_type_primary"
            onClick={() => navigate(-1)}
            type="button"
          >
            Вернуться назад
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
