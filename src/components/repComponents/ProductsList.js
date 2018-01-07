import React from 'react';
import bodyCSS from '../../../styles/bodyStyles.css';
import {NavLink} from 'react-router-dom';


const Product = ({product,showProdDetail,setLocationState,addToCart}) => {
  let src = "../../../images/"+product.image;
  let linkTo = "/product/"+product.name;
  return <NavLink to={linkTo}><div className={bodyCSS.prodTile} onClick={() => {setLocationState(product)}}>
    <img src={src}/>
    <div className={bodyCSS.prodShortDetails}>
      <p>
        <span style={{textOverflow:'ellipsis'}}>{product.name}</span><br/>
        <span>{product.measurement}</span><br/><b>{product.price}$</b><br/>
      </p>
      <input type="button" value="Add to Cart" onClick={(e) => {e.preventDefault();addToCart(product)}}/>
    </div>
  </div></NavLink>
}

const ProductsList = (props) => {
  let Products = props.products.map((item,index) => {
    return <Product key={index} product={item} {...props}/>
  })
  return <div className={bodyCSS.prodList}>
      <div className={bodyCSS.list}>{Products}</div>
    </div>
}


export default ProductsList;
