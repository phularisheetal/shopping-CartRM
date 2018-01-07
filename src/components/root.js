/* @flow */
import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import ProductsPage from './ProductsPage';
import Header from './Header';
import NotFound from './repComponents/NotFound';
import Cart from './repComponents/Cart';
import {createBrowserHistory} from 'history';
import bodyStyles from '../../styles/bodyStyles.css';
import {withRouter} from "react-router-dom";
import ProductDetailPage from './repComponents/ProductDetailPage';

type Props = {};

type State = {
  currProd: Object,
  cart:Array<Object>,
  showModal:boolean
};

const HeaderWithRoute = withRouter(props => <Header {...props}/>);
const ProductsPageWrap = () => {
  return <ProductsPage />
}
class root extends React.Component<Props, State> {
  state = {
   currProd: {},
   cart:[],
   showModal:false
 };
  constructor(props:Object) {
    super(props);

    this.setCurrProd = this.setCurrProd.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.onCartClick = this.onCartClick.bind(this)
  }

  setCurrProd = function(prod:Object) {
    this.setState({currProd:prod})
  }

  checkIndex = function(prod:Object) {
    for(let i=0;i <   this.state.cart.length;i++) {
      if(this.state.cart[i].name == prod.name) {
        return i;
      }
    }
    return -1;

  }

  copy = function(o:Array<Object>) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? this.copy(v) : v;
   }
   return output;
}

  addToCart = function(prod:Object) {
    let cart = this.copy(this.state.cart);
    if(this.checkIndex(prod) > -1) {
      cart[this.checkIndex(prod)].price = parseFloat(cart[this.checkIndex(prod)].price)+parseFloat(prod.price);
      cart[this.checkIndex(prod)].quantity += 1;
    }else {
      prod.quantity = 1;
      cart.push(prod);
    }
    this.setState({cart: cart})
  }
  onCartClick = function() {
    this.setState({showModal:!this.state.showModal})
  }

  render() {
    return <Router history={createBrowserHistory()}>
    <div className="container">
      <HeaderWithRoute cart={this.state.cart}  onCartClick={this.onCartClick} showModal={this.state.showModal} setLocationState={this.setCurrProd}/>
      <Switch>
        <Route path="/" component={()=> <ProductsPage setCurrProd={this.setCurrProd} addToCart={this.addToCart}/>} exact/>
        <Route path="/cart" component={() => <Cart products={this.state.cart}/>} />
        <Route path="/product/:name" component={()=> <ProductDetailPage currProd={this.state.currProd} addToCart={this.addToCart}/>} />
        <Route component={ProductsPage}/>
      </Switch>
    </div>
    </Router>
  }
}




export default root;
