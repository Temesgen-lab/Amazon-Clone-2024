import React from 'react';
import style from './category.module.css'
import { Link } from 'react-router-dom';



function CategoryCard(props) {
  return (



    <Link to={`/category/${props.title}`} className={style.category_box} >
      <p className={style.category_name}>{props.title}</p>
      <div className={style.category_img_box}>

        <img src={props.imageLink} alt="image" className={style.category_img} />
      </div>
      <p className={style.category_btn}>shop now</p>
    </Link>



  )
}

export default CategoryCard;
