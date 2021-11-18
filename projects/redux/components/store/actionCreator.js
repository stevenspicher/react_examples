import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM } from "../../constants/actionTypes";

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value,
});

export const addItemAction = () => ({
    type: ADD_ITEM,
});

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index,
});