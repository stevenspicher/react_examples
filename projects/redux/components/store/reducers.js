// 1 Create a default state.

import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM } from "../../constants/actionTypes";

const defaultState = {
    inputValue: 'Write something',
    list: [
        'Walk dog 2:00',
        'Meeting 4:00',
        'Watch movie 8:00',
    ],
};

// 2 Create a function

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            let newInputState = JSON.parse(JSON.stringify(state));
            newInputState.inputValue = action.value;
            return newInputState;
        case ADD_ITEM:
            let newAddItemState = JSON.parse(JSON.stringify(state));
            newAddItemState.list.push(newAddItemState.inputValue);
            newAddItemState.inputValue = '';
            return newAddItemState;
        case DELETE_ITEM:
            let newDeleteItemState = JSON.parse(JSON.stringify(state));
            newDeleteItemState.list.splice(action.index, 1);
            return newDeleteItemState;
        default:
            return state;
    };
};

export default reducers;