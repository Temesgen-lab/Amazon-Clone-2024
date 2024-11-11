import React from 'react'
import Header from '../../components/Header/Header'
import CarouselEffect from '../../components/Carousel/Carousel';
import Category from '../../components/Category/Category';
import Product from '../../components/Products/Product';


const Home = () => {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  )
}

export default Home
