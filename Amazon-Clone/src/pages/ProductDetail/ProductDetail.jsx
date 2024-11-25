import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Products/ProductCard";
import style from "./detail.module.css";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((product) => {
        setProduct(product?.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(true);
        console.log(err);
      });
  }, []);
  console.log(product);
  return (
    <>
      {isLoaded ? (
        <div className={`${style.detail_box}`}>
          <ProductCard
            imgLink={product?.image}
            title={product?.title}
            price={product?.price}
            rating={product?.rating}
            id={product?.id}
            flex={true}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
export default ProductDetail;
