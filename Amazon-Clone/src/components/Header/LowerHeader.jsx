import React from 'react'
import style from './header.module.css'
import MenuIcon from '@mui/icons-material/MenuOutlined';
const LowerHeader = () => {
  return (
    <div className={style.lHeader_container}>

      <ul>
        <li className={`${style.menu_icon} ${style.outline_sm} `}><MenuIcon />all</li>
        <li className={style.outline_sm}>today's deals</li>
        <li className={style.outline_sm}> customer service</li>
        <li className={style.outline_sm}>registry</li>
        <li className={style.outline_sm}>gift cards</li>
        <li className={style.outline_sm}>sell</li>
      </ul>
    </div >
  )
}

export default LowerHeader
