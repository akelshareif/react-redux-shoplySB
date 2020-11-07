import { products } from '../data.json';
import { ADD_ITEM, DELETE_ITEM } from '../actionTypes';

const INITIAL_STATE = { cart: {}, inventory: products };

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.item.id]: {
                        itemData: action.item.item,
                        qty: Number(action.item.qty),
                    },
                },
            };

        case DELETE_ITEM:
            const id = action.item.id;
            delete state.cart[id];
            return {
                ...state,
                cart: { ...state.cart },
            };
        default:
            return state;
    }
};

export default rootReducer;
