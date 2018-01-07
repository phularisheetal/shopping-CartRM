import React from 'react';
import headerCSS from '../../styles/header.css';
import Modal from './repComponents/Modal';
import {NavLink} from 'react-router-dom'

const Header = (props) => {

  if(props.location.pathname == '/' || props.location.pathname == '/productDetails') {
    return <ul className={headerCSS.nav}>
    <li title="View Cart"><a onClick={props.onCartClick}>
        <svg width="32" height="32" viewBox="0 0 47 36" xmlns="http://www.w3.org/2000/svg" style={{fill: 'rgb(255, 255, 255)', height: '20px'}}>
        <path d="M36.943 11c-.08-.125-7.976-8.05-7.976-8.05L27 5l6 6H14l6-6-2-2.05s-7.89 7.92-7.972 8.046L5.95 11C4.86 11 4 11.79 4 13c0 .452.137 1.275.15 1.337l3.846 18.025C8.2 33.312 9.05 34 10.02 34h26.923c.963 0 1.814-.685 2.026-1.64l3.846-18.027c.012-.058.217-.917.217-1.385C43.033 11.806 42.14 11 41 11h-4.057zM11 31L7.42 14h32.163L36 31H11z" fillRule="evenodd"></path></svg>
        <sup>{props.cart.length}</sup>
        <Modal cls={props.showModal} cart={props.cart}/>
    </a>
    </li>

    </ul>
  }else {
    return <ul className={headerCSS.nav}>
      <li title="View Products"><NavLink exact activeClassName="active" to='/' >Products</NavLink></li>
      <li title="View Cart"><a onClick={props.onCartClick}>
          <svg width="32" height="32" viewBox="0 0 47 36" xmlns="http://www.w3.org/2000/svg" style={{fill: 'rgb(255, 255, 255)', height: '20px'}}>
          <path d="M36.943 11c-.08-.125-7.976-8.05-7.976-8.05L27 5l6 6H14l6-6-2-2.05s-7.89 7.92-7.972 8.046L5.95 11C4.86 11 4 11.79 4 13c0 .452.137 1.275.15 1.337l3.846 18.025C8.2 33.312 9.05 34 10.02 34h26.923c.963 0 1.814-.685 2.026-1.64l3.846-18.027c.012-.058.217-.917.217-1.385C43.033 11.806 42.14 11 41 11h-4.057zM11 31L7.42 14h32.163L36 31H11z" fillRule="evenodd"></path></svg>
          <sup>{props.cart.length}</sup>
          <Modal cls={props.showModal} cart={props.cart}/>

      </a>
      </li>
    </ul>
  }

}

 export default Header;
