import React from "react";
import style from "./product.module.css";

import numeral from "numeral";
import CurrencyFormatter from "../CurrencyFormat/CurrencyFormatter";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function ProductCard({ imgLink, title, price, rating, id, flex }) {
  return (
    <div className={`${style.product_box} ${flex ? style.flexed : ""}`}>
      <Link to={`/products/${id}`} className={style.img_box}>
        <img src={imgLink} alt="image" className={style.img} />
      </Link>
      <div className={style.card_lower}>
        <p className={style.title}>{title}</p>
        <p className={style.rating}>
          {" "}
          <Rating value={rating?.rate} precision={0.5} />
          <span className={style.count}>{rating?.count}</span>
        </p>
        <p className={style.price}>
          {" "}
          <CurrencyFormatter price={price} />{" "}
        </p>
        <button className={style.btn_add}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
