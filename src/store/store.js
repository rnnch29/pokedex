import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemonSlice";
import pocketSlice from "./slices/pocketSlice";

export const store = configureStore({
    reducer: {
        pokemon : pokemonSlice,
        pocket: pocketSlice,
    }
})

export default store;