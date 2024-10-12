import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quizDataReducer } from "./quizDataSlice";

export const rootReducer = combineReducers({
    quiz: quizDataReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
