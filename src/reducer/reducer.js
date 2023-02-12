const initialState = {
  selectedCartItems:[]
};
function reducer(state = initialState, action) {
switch(action.type) {
  case 'UPDATE_CART':
    return {
      selectedCartItems: action.payload
    };
  default:
    return state;
  }
}
export default reducer;