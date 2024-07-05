import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemonList: []
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.pokemonList = action.payload
        }
    }
})

export const { addPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer;