const FilterReducer = (state={},action)=> {
  switch(action.type) {
    case 'filter':return {
      type:action.payload.type, value:action.payload.value
    };

    default: return state;
  }
}

export default FilterReducer;
