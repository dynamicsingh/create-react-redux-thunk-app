import * as types from '../actionTypes';

export function sampleActionCreator(updateVal) {
    return function (dispatch) {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        return dispatch({
            type: types.SAMPLE_ACTION_TYPE,
            val: updateVal
        });
    };
}
