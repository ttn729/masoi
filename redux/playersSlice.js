import { createSlice } from "@reduxjs/toolkit/";

export const playersSlice = createSlice({
    name: 'player',
    initialState: {
        players: [
            "Spicy",
            "a Edric",
            "Julia",
            "c Tủn",
            "c BT",
            "c nhum",
            "c Ngân",
            "c Yuuki",
            "a Skinny",
            "Coli"
        ],
        shuffled: []
    },
    reducers: {
        PREPEND: (state, action) => {
            state.players = [action.payload, ...state.players]
        },
        REMOVE: (state, action) => {
            state.players = state.players.filter(item => item != action.payload)
        },
        SHUFFLE: (state, action) => {
            state.shuffled = action.payload;
        }
    },
});

export const {PREPEND, REMOVE, SHUFFLE} = playersSlice.actions

export default playersSlice.reducer