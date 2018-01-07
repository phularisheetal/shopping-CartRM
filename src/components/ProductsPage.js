import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts,filterProducts} from '../actions/getProducts';
import Filters from './repComponents/Filters';
import ProductsList from './repComponents/ProductsList';

import bodyCSS from '../../styles/bodyStyles.css';

class ProductsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProduct:{}
    }
    this.filterData = this.filterData.bind(this);
    this.clear = this.clear.bind(this)
  }

  componentDidMount() {
    this.props.getProducts()
  }



  filterData(type,value) {
      this.props.filterProducts(type,value);
  }

  clear() {
    this.props.filterProducts('','');
  }
  render() {


    if(this.props.products == {}) {
      return <div className={bodyCSS.gridCont}>No Products </div>
    }
    const{filters,products} = this.props;
    return <div className={bodyCSS.gridCont}>
      <Filters filters = {filters} filterData={this.filterData} clear={this.clear}/>
      {this.props.products.length > 0?<ProductsList products={products} setLocationState={this.props.setCurrProd}  addToCart={this.props.addToCart}/>
      :<div className={bodyCSS.noProd}>
        No Products, Refine your filters
        </div>}
    </div>
  }
}


function mapStateToProps(state) {
  if(state.filters != '' && state.products.data) {
    if(state.filters.type == 'brand') {
      return {products: state.products.data.products.filter((item) => {
        return item[state.filters.type] == state.filters.value;
      }),filters:state.products.data.filters, status:state.products.status}
    } else if(state.filters.type == 'price'){
      let range = state.filters.value.split('-')
      return {products: state.products.data.products.filter((item) => {
        return parseFloat(item[state.filters.type]) >= parseFloat(range[0]) && parseFloat(item[state.filters.type]) <= parseFloat(range[1]) ;
      }),filters:state.products.data.filters,status:state.products.status}
    }
  }
 return {status:state.products.status, products:state.products.data?state.products.data.products:[],filters:state.products.data?state.products.data.filters:[]}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getProducts,filterProducts},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductsPage);
