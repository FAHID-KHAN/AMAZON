export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return {
        ...state,
        basket:[...state.basket,action.item]
      };
      break;
    //logic for removing basket
    case "REMOVE_FROM_BASKET":
      return { state };
      break;

    default:
      return state;
  }
};

export default reducer;
