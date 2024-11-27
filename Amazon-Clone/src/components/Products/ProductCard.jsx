import React, { useContext } from "react";
import style from "./product.module.css";

import numeral from "numeral";
import CurrencyFormatter from "../CurrencyFormat/CurrencyFormatter";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({
  imgLink,
  title,
  price,
  rating,
  id,
  flex,
  desc,
  renderDesc,
  renderAdd,
}) {
  const [state, dispatch] = useContext(DataContext);
  function addToCart() {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { imgLink, title, price, rating, id, desc },
    });
  }


  return (
    <div className={`${style.product_box} ${flex ? style.flexed : ""}`}>
      <Link to={`/products/${id}`} className={style.img_box}>
        <img src={imgLink} alt="image" className={style.img} />
      </Link>
      <div className={style.card_lower}>
        <p className={style.title}>{title}</p>
        {renderDesc && <div className={style.desc_box}>{desc}</div>}
        <p className={style.rating}>
          {" "}
          <Rating value={rating?.rate} precision={0.5} />
          <span className={style.count}>{rating?.count}</span>
        </p>
        <p className={style.price}>
          {" "}
          <CurrencyFormatter price={price} />{" "}
        </p>

        {renderAdd && <button
          className={style.btn_add}
          onClick={addToCart}
          
        >
          add to cart
        </button> }
        
      </div>
    </div>
  );
}

export default ProductCard;
