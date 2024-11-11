import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import style from './product.module.css'
import axios from 'axios'

function Product() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {

        setProducts(res.data)
      }
      )
  }, [])
  console.log(products)
  return (
    <div className={style.product_container}>
      {products.map(product => (
        <ProductCard imgLink={product.image} title={product.title} price={product.price} rating={product.rating} />
      ))}


    </div>
  )
}

export default Product;
