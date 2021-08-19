import { increaseQuantity } from './cart.actions';
import CartActionTypes from './cart.types';
import { addItemToCart, removeItemOfCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }  
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( cartItem => cartItem.id !== action.payload.id )
            }  
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItemOfCart(state.cartItems, action.payload)
            }   
        // case CartActionTypes.INCREASE_QUANTITY:
        //     return {
        //         ...state,
        //         cartItems:increaseQuantity(state.cartItems, action.payload)
        //     } 
        // case CartActionTypes.DECREASE_QUANTITY:
        //     return {
        //         ...state,
        //         cartItems:decreaseQuantity(state.cartItems, action.payload)
        //     }              
        default: 
          return state;
    }
}

export default cartReducer;