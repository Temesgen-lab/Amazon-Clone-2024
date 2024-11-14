import React from 'react'
import Header from '../../components/Header/Header'
import CarouselEffect from '../../components/Carousel/Carousel';
import Category from '../../components/Category/Category';
import Product from '../../components/Products/Product';
import Layout from '../../components/Layout/Layout';

const Home = () => {
  return (
    <div>
      <Layout>
        <CarouselEffect />
        <Category />
        <Product />
      </Layout>
    </div>
  )
}

export default Home
