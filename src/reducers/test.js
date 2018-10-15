import { ADD_ONE, SUBTRACT_ONE } from '../actions/actionsTypes'

initialState = {
    value: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                value: state.value+1
            }
        case SUBTRACT_ONE:
            return {
                ...state,
                value: state.value-1
            }
        default:
            return state
    }
}