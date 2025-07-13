const initialState = {
  count: 0,
  data: [],
  loading: false,
  error: null
}
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "data_loading":
      return { ...state, loading: true }
    case "data_success":
      return { ...state, loading: false, data: action.payload }
    case "data_error":
      return { ...state, loading: false, error: action.payload }
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'RESET':
      return { ...state, count: 0 }
    default:
      return state
  }
}

export default counterReducer