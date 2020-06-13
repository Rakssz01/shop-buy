import { addItemToCart,removeItemFromCart } from "./cartUtils";


const initialState = {
  hidden: true,
  cartItems: [],
  rafin:1
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOGGLE_CART_HIDDEN":
      return { ...state, hidden: !state.hidden };
    case "ADD_ITEM":
      return { ...state, 
        cartItems: addItemToCart(state.cartItems,payload),
        rafin:2,
       // cartItems: [...state.cartItems,payload]
     };
     case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        )
      };
    

    default:
      return state;
  }
};
