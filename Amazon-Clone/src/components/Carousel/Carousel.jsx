import React from 'react'
import style from './carousel.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from './img/data'

function CarouselEffect() {
  return (
    <div className={style.carousel_container}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        className={style.carousel_img}
      >
        {
          img.map((imgLink) => {
            return <img src={imgLink} alt='image' />
          }

          )
        }



      </Carousel>
      <div className={style.hero_img}></div>
    </div>
  )
}

export default CarouselEffect;
