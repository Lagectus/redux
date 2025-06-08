import counterConstant from "../constants/counterConstant";
let { INCREMENT,DECREMENT,RESET } = counterConstant;

const initialState = {
    count: 0,
    x:12
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return initialState;
        default:
            return state;
    }
}