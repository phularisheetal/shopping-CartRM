import React from 'react';
import bodyCSS from '../../../styles/bodyStyles.css';
import checkBoxCss from '../../../styles/checkbox.css';

const Filter = (props) => {
  return <div className={bodyCSS.filterList}>
      <h4>{props.type.toUpperCase()}</h4>
      <ul>{props.fList.map((item,index)=>{
        return <li key={index}>
          <div>
            <input type="radio" id={item} className={checkBoxCss.checkboxCustom} name={props.type}  onClick={() => {props.filterData(props.type,item)}}/>
            <label htmlFor={item} className={checkBoxCss.checkboxCustomLabel}>{item}</label>
          </div>
        </li>
      })}</ul>
  </div>
}

const Filters = (props) => {
  let arr = [];
  let filters = props.filters
  for(var type in filters) {
    arr.push(<Filter key={type} type={type} fList={filters[type]} filterData={props.filterData}/>)
  }
  return <div className={bodyCSS.filterCont}>
  {arr}
  <input type="button" value="Clear Filters" onClick={props.clear}/>
  </div>
}


export default Filters;
