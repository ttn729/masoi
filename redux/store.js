import { requirePropFactory } from "@mui/material";
import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./playersSlice"
import rolesReducer from "./rolesSlice"

export default configureStore({
    reducer: {
        player: playersReducer,
        role: rolesReducer,
    },
})