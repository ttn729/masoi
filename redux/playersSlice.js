import { createSlice } from "@reduxjs/toolkit/";

export const playersSlice = createSlice({
    name: 'player',
    initialState: {
        players: [
            "Spicy",
            "a Edric",
            "Julia",
            "c Tủn",
            "c BT"
        ],
    },
    reducers: {
        PREPEND: (state, action) => {
            state.players = [action.payload, ...state.players]
        },
        REMOVE: (state, action) => {
            state.players = state.players.filter(item => item != action.payload)
        },
    },
})

export const {PREPEND, REMOVE} = playersSlice.actions

export default playersSlice.reducer