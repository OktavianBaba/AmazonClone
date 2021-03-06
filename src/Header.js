import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}] = useStateValue();


  return (
    <div className="header">
        <Link to="/">
        <img 
        className="header__logo" alt = "Amazon Logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>
        

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon
            className="header__searchIcon" />
        </div>

        <div className="header__nav">
        <Link to='/login'>
            <div className="header__option">
                <span className="header__optionLineoOne">Hello Guest</span>
                <span className="header__optionLineoTwo">Sign In</span>
            </div>
        </Link>

            <div className="header__option">
                <span className="header__optionLineoOne">Returns</span>
                <span className="header__optionLineoTwo">& Orders</span>
            </div>
            <div className="header__option">
            <span className="header__optionLineoOne">Your</span>
                <span className="header__optionLineoTwo">Prime</span>
            </div>
        </div>

        <Link to="/checkout">
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      
    </div>
  )
}

export default Header
