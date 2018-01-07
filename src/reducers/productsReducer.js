const ProductsReducer = (state={},action)=> {
  switch(action.type) {
    case 'SUCCESS' :
    return {
      status:'SUCCESS',data:action.payload
    };

    default: return state;
  }
}

export default ProductsReducer;
