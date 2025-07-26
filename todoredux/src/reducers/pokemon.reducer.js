const initialState = {
    result: [],
    loading: false,
    error: null
}

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_POKEMON_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_POKEMON_SUCCESS':
            return {
                ...state,
                loading: false,
                result: [...state.result,...action.payload]
            };
        case 'FETCH_POKEMON_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}