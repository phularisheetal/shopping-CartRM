import { combineReducers } from 'redux';
import ProductsReducer from './productsReducer';
import FilterReducer from './filterReducer';
const rootReducer = combineReducers({
  products: ProductsReducer,
  filters:FilterReducer
});

export default rootReducer;
