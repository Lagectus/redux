

export const fetchPokemonRequest = () => async(dispatch)=>{
    dispatch({ type: 'FETCH_POKEMON_REQUEST' });
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
        const data = await response.json();
        console.log(data.results,"ddd");
        
        dispatch({ type: 'FETCH_POKEMON_SUCCESS', payload: data.results }); // Fetching only the first 10 POKEMON for simplicity
    } catch (error) {
        dispatch({ type: 'FETCH_POKEMON_FAILURE', payload: error.message });
    }

}