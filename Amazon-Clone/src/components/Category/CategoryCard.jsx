import React from 'react';
import style from './category.module.css'



function CategoryCard(props) {
  return (



    <div className={style.category_box} >
      <p className={style.category_name}>{props.title}</p>
      <div className={style.category_img_box}>
        <a href="">
          <img src={props.imageLink} alt="image" className={style.category_img} /></a>
      </div>
      <a href="#" className={style.category_btn}>shop now</a>
    </div>



  )
}

export default CategoryCard;
