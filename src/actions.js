import { ADD_ITEM, DELETE_ITEM } from './actionTypes';

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item,
    };
};

export const removeItem = (item) => {
    return {
        type: DELETE_ITEM,
        item,
    };
};
