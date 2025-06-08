import counterConstant from "../constants/counterConstant";

let { INCREMENT, RESET, DECREMENT } = counterConstant;

export const increment = () => {
    return {
        type: INCREMENT
    };
}
export const decrement = () => {
    return {
        type: DECREMENT
    };
}
