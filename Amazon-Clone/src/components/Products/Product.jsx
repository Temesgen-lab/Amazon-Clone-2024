import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import style from "./product.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(true);
        console.log(err);
      });
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className={style.product_container}>
          {products.map((product) => (
            <ProductCard
              imgLink={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              id={product.id}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Product;
