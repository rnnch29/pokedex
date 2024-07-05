import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pockets: [],
    sumQty: 0,
}

const pocketSlice = createSlice({
    name: 'pocket',
    initialState,
    reducers: {
        add: (state, action) => {
            const check = state.pockets.findIndex((item) => item.id === action.payload.id);
            if (check !== -1) {
                state.pockets[check].qty += action.payload.qty;
            } else {
                state.pockets.push(action.payload);
            }
            state.sumQty = state.pockets.reduce((sum, item) => sum + item.qty, 0);

        },
        remove(state, action) {
            state.pockets = state.pockets.filter((item) => item.id !== action.payload);
            state.sumQty = state.pockets.reduce((sum, item) => sum + item.qty, 0);
        },
    },
})

export const { add, remove } = pocketSlice.actions
export default pocketSlice.reducer