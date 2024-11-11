import React from 'react'
import style from './Product.module.css';

import numeral from 'numeral'
import CurrencyFormatter from '../CurrencyFormat/CurrencyFormatter';
import Rating from '@mui/material/Rating'



function ProductCard({ imgLink, title, price, rating }) {
  return (
    <div className={style.product_box}>
      <a href="#" className={style.img_box}>
        <img src={imgLink} alt="image" className={style.img} />
      </a>
      <p className={style.title}>
        {title.substr(0, 50)}
      </p>
      <p className={style.rating}>  <Rating value={rating.rate} precision={0.5} />
        <span className={style.count}>{rating.count}</span></p>
      <p className={style.price}> <CurrencyFormatter price={price} />    </p>
      <button className={style.btn_add}>add to cart</button>
    </div>
  )
}




export default ProductCard

