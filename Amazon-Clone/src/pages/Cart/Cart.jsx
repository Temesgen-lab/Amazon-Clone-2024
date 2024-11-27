import React, { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Products/ProductCard";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  console.log(basket);

  return (
    <div>
      <h1>Hello</h1>
      <p>Your shopping basket</p>
      <hr />
      {basket.length == 0 ? (
        <p>oops ! no item in Your cart</p>
      ) : (
        basket.map((item, i) => {
          return (
            <div style={{ width: "50%" }}>
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
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Cart;
