import React from 'react';
import modalCSS from '../../../styles/modal.css';


const Modal = (props) => {
  let cls = props.cls?modalCSS.modal:modalCSS.modalHide;
  return <div id="myModal" className={cls}>
  <div className={modalCSS.modalContent}>
    <span className={modalCSS.close}>&times;</span>
    <h1>Cart

    </h1>
    <ul className={modalCSS.cartList}>
      {props.cart.length ==0? <div className={modalCSS.cartMessage}>No Items Added to Cart</div>:''}
      {props.cart.map((item) => {
      let src = "../../../images/"+item.image;
      let linkTo = "/product/"+item.name;
        return <li   key={item.name}>
          <div className={modalCSS.liTag} onClick={() => {props.setLocationState(product)}}>
          <img src={src}/>
          <p>{item.name}</p>
          <p>Qty:{item.quantity}</p>
          <p>Total:{item.price}$</p>
          <p title="Remove">X</p>
        </div>
        </li>
      })}
    </ul>
    <div className={props.cart.length>0?modalCSS.checkout:modalCSS.checkoutDisable}><input type="button" value="Checkout"/></div>
  </div>

</div>
}

export default Modal
