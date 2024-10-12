import { createSlice } from "@reduxjs/toolkit";

interface Choice {
    name: string;
    weigth: number;
}

type Choices = Choice[];

interface initialState {
    dilemma: string;
    step: number;
    prosToDo: Choices[];
    consToDo: Choices[];
    prosNotToDo: Choices[];
    consNotToDo: Choices[];
}

const initialState: initialState = {
    dilemma: "",
    step: 0,
    prosToDo: [],
    consToDo: [],
    prosNotToDo: [],
    consNotToDo: [],
};

export const quizDataSlice = createSlice({
    name: "quizData",
    initialState,
    reducers: {
        setDilemma: (state, action) => {
            state.dilemma = action.payload;
        },
        setNextStep: (state) => {
            state.step = state.step + 1;
        },
        setPrevStep: (state) => {
            state.step = state.step - 1;
        },
        addProsToDo: (state, action) => {
            state.prosToDo.push(action.payload);
        },
        removeProsToDo: (state, action) => {
            state.prosToDo = state.prosToDo.filter(
                (item) => item !== action.payload
            );
        },
        addConsToDo: (state, action) => {
            state.consToDo.push(action.payload);
        },
        removeConsToDo: (state, action) => {
            state.consToDo = state.consToDo.filter(
                (item) => item !== action.payload
            );
        },
        addProsNotToDo: (state, action) => {
            state.prosNotToDo.push(action.payload);
        },
        removeProsNotToDo: (state, action) => {
            state.prosNotToDo = state.prosNotToDo.filter(
                (item) => item !== action.payload
            );
        },
        addConsNotToDo: (state, action) => {
            state.consNotToDo.push(action.payload);
        },
        removeConsNotToDo: (state, action) => {
            state.consNotToDo = state.consNotToDo.filter(
                (item) => item !== action.payload
            );
        },
    },
});

export const {
    setDilemma,
    setNextStep,
    setPrevStep,
    addProsToDo,
    removeProsToDo,
    addConsToDo,
    removeConsToDo,
    addProsNotToDo,
    removeProsNotToDo,
    addConsNotToDo,
    removeConsNotToDo,
} = quizDataSlice.actions;

export const quizDataReducer = quizDataSlice.reducer;
