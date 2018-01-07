/* @flow */

import {products} from '../data/products';


export const filterProducts = (type:string,value:string) => {
  return {
    type:'filter',
    payload:{products,type,value}
  }
}


export const getProducts = () => {
  return {
    type:'SUCCESS',
    payload:products
  }
}
