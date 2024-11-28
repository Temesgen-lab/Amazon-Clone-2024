import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Products/ProductCard";
import CurrencyFormatter from "../../components/CurrencyFormat/CurrencyFormatter";
import style from "./cart.module.css";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket = [] }, dispatch] = useContext(DataContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let totalPrice = basket.reduce((total, current) => {
      return current?.price * current?.amount + total;
    }, 0);
    setPrice(totalPrice);
  }, [basket]);
  console.log(basket);
  return (
    <div className={style.cart_outer_container}>
      <h1>Hello</h1>
      <p>Your shopping basket</p>
      <hr />

      <div className={style.cart_container}>
        <div className={style.cart_left}>
          {basket.length == 0 ? (
            <p>oops ! no item in Your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <div style={{ width: "100%" }}>
                  <ProductCard
                    key={i}
                    imgLink={item.imgLink}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    id={item.id}
                    desc={item.desc}
                    flex={true}
                    renderDesc={true}
                    renderAdd={false}
                    amount={item.amount}
                  />
                </div>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={style.cart_right}>
            <p className={style.total_price}>
              subtotal ({basket.length} items)
              <span>
                <CurrencyFormatter price={price} />
              </span>
            </p>
            <p className={style.gift_box}>
              <input type="checkbox" />
              this order contains gift
            </p>
            <Link to={`/checkout`} className={style.btn_checkOut}>
              continue to checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
