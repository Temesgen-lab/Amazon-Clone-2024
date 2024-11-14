import React, { useState } from 'react';
import style from './header.module.css';
import amazonLogo from '../../assets/images/amazon-logo.png';
import LocIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import DropDownIcon from '@mui/icons-material/ArrowDropDown';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isClicked, setClicked] = useState(false);

  function toggleFun() {
    setClicked((prev) => !prev);
  }

  return (
    <>
      <div className={style.header_outer_container}>
        <div className={style.header_container}>
          <div className={style.header_left}>
            <div className={`${style.header_img_box} ${style.outline}`}>
              <a href="#">
                <img src={amazonLogo} alt="amazon-logo" className={style.header_amazon_img} />
              </a>
            </div>
            <div className={`${style.header_location_box} ${style.outline_sm}`}>
              <a href="#" className={`${style.btn} ${style.btn_location}`}>
                <LocIcon className={style.loc_icon} />
                <p>Deliver to <span>Ethiopia</span></p>
              </a>
            </div>
          </div>
          <div className={style.header_search}>
            <div className={style.dropdown_box}>
              <button onClick={toggleFun} className={style.header_ddw_btn} style={{ borderBottomLeftRadius: isClicked ? '0px' : '5px' }}>all <DropDownIcon /></button>
              <div className={style.drop_option} style={{ opacity: isClicked ? 1 : 0, pointerEvents: isClicked ? 'auto' : 'none', visibility: isClicked ? 'visible' : 'hidden' }}>
                <p className={style.option}>all deparments</p>
                <p className={style.option}>arts & crafts</p>
                <p className={style.option}>automotive</p>
                <p className={style.option}>baby</p>
                <p className={style.option}>beauty and personal care</p>
                <p className={style.option}>books</p>
                <p className={style.option}>boys' fashion</p>
                <p className={style.option}>computers</p>
                <p className={style.option}>deals</p>
                <p className={style.option}>digital music</p>
                <p className={style.option}>girls' fashion</p>
                <p className={style.option}>health and household</p>
                <p className={style.option}>home and kitchen</p>
                <p className={style.option}>industrial and scientific</p>
                <p className={style.option}>kindle store</p>
                <p className={style.option}>luggage</p>
                <p className={style.option}>men's fashion</p>
                <p className={style.option}>movies & tv</p>
                <p className={style.option}>music,CDs & vinyl</p>
                <p className={style.option}>pet supplies</p>
                <p className={style.option}>prime video</p>
                <p className={style.option}>software</p>
                <p className={style.option}>sports & outwards</p>
                <p className={style.option}>tools & homeimprovement</p>
                <p className={style.option}>toys & games</p>
                <p className={style.option}>video games</p>
                <p className={style.option}>women's fashion</p>



              </div>
            </div>
            <input type="text" className={style.search_input} placeholder='search amazon' />
            <SearchIcon className={style.search_icon} />
          </div>
          <div className={style.header_right}>
            <p className={`${style.outline_sm} ${style.header_nation}`}>EN<DropDownIcon /></p>
            <Link to='/signIn' className={`${style.outline_sm} ${style.header_account}`}>Hello, sign in <span>account & lists<DropDownIcon /></span></Link>
            <Link to='/orders' className={`${style.outline_sm} ${style.header_orders}`}>returns <span>& orders</span></Link>
            <Link to='/cart' className={`${style.outline_sm} ${style.header_cart}`}><CartIcon /> cart <span className={style.cart_no}>0</span></Link>
          </div>
        </div>
      </div>
      <LowerHeader /></>
  );
};

export default Header;
