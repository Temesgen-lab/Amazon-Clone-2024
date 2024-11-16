import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './result.module.css'
import { useParams } from 'react-router-dom';
import { productUrl } from '../../Api/url';
import ProductCard from '../../components/Products/ProductCard';
import { style } from '@mui/system';

function Results() {
  const [products, setProducts] = useState([])
  const { categoryName } = useParams();


  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`).then((res) => {
      setProducts(res.data);
    })
  }, [])

  return (
    <div>
      <h1 className={styles.result_heading}>Results</h1>
      <p className={styles.result_sub}>Category / {categoryName}</p>
      <hr />
      <div className={styles.product_container}>
        {products.map((product, index) => {
          return <>
            <ProductCard imgLink={product.image} title={product.title} price={product.price} rating={product.rating} />
          </>
        })}
      </div>


    </div>
  )
}

export default Results