import React from 'react';
import pdCSS from '../../../styles/productDetails.css';

const ProductDetailPage = (props) => {
let product = props.currProd;
let src = "../../../images/"+product.image;

  return <div className={pdCSS.pdCont}>
      <section className={pdCSS.imgCont}>
        <h1>{product.name}</h1>
        <div><img src={src}/></div>
      </section>
      <section className={pdCSS.details}>
          <p className={pdCSS.quantity}>{product.measurement}</p>
          <p className={pdCSS.price}>${product.price}</p>
          <p className={pdCSS.desc}>{product.desc}</p>

          <input type="button" value="Add to Cart" onClick={() => {props.addToCart(product)}}/>
      </section>
    </div>
}

export default ProductDetailPage;
