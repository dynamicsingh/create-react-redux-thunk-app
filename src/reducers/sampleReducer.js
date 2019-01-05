import {SAMPLE_ACTION_TYPE} from "../actionTypes/index";

const initialState = {counter : 0};

export default function sampleReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        //add your cases according to action types
        case SAMPLE_ACTION_TYPE:
            //do the changes to state, keep in mind that state should be kept immutable
             newState = {...state};
             newState.counter = newState.counter + action.val;
            return newState;

        default: return state;
    }
}