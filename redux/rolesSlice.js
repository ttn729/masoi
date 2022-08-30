import { createSlice } from "@reduxjs/toolkit/";

export const rolesSlice = createSlice({
    name: 'role',
    initialState: {
        roles: [
            "Sói 1",
            "Sói 2",
            "Sói con",
            "Phù thủy",
            "Bảo vệ",
            "Tiên tri",
            "Thợ săn ",
            "Dân 1",
            "Dân 2",
            "Cave"
        ],
    },
    reducers: {
        PREPEND: (state, action) => {
            state.roles = [action.payload, ...state.roles]
        },
        REMOVE: (state, action) => {
            state.roles = state.roles.filter(item => item != action.payload)
        },
    },
})

export const { PREPEND, REMOVE } = rolesSlice.actions

export default rolesSlice.reducer