import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { steps } from "../components/steps/steps";
export interface Choice {
    title: string;
    weight?: number;
}

export type Choices = Choice[];
interface InitialState {
    question: string;
    step: number;
    prosToDo: Choices;
    consToDo: Choices;
    prosNotToDo: Choices;
    consNotToDo: Choices;
}

type ChoicesRows = keyof Pick<
    InitialState,
    "prosToDo" | "consToDo" | "prosNotToDo" | "consNotToDo"
>;

interface ChangeChoicePayload extends Omit<Choice, "title"> {
    title?: string;
    i: number;
    row: ChoicesRows;
}

const initialState: InitialState = {
    question: "",
    step: 0,
    prosToDo: [
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
    ],
    consToDo: [
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
    ],
    prosNotToDo: [
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
    ],
    consNotToDo: [
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
    ],
};

export const quizDataSlice = createSlice({
    name: "quizData",
    initialState,
    reducers: {
        resetState: () => {
            return initialState
        },
        setQuestion: (state, action) => {
            state.question = action.payload;
        },

        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        setNextStep: (state) => {
            state.step = state.step >= steps.length - 1 ? 0 : state.step + 1;
        },
        setPrevStep: (state) => {
            state.step = state.step > 0 ? state.step - 1 : 0;
        },

        addChoice: (
            state,
            action: PayloadAction<{ row: ChoicesRows; title: string }>
        ) => {
            const { row, title } = action.payload;
            state[row].push({ title, weight: 10 });
        },

        changeChoice: (state, action: PayloadAction<ChangeChoicePayload>) => {
            const i = action.payload.i;
            const title = action.payload.title;
            const weight = action.payload.weight;
            const row = action.payload.row;

            if (title != undefined) {
                state[row][i].title = title;
            }

            if (weight != undefined) {
                state[row][i].weight = weight;
            }
        },

        deleteChoice: (
            state,
            action: PayloadAction<{ row: ChoicesRows; i: number }>
        ) => {
            const { row, i } = action.payload;
            // console.log(row, i);
            state[row] = state[row].filter((_, index) => index !== i);
        },
    },
});

export const {
    resetState,
    setQuestion,
    deleteChoice,
    setStep,
    setNextStep,
    setPrevStep,
    changeChoice,
    addChoice,
} = quizDataSlice.actions;

export const quizDataReducer = quizDataSlice.reducer;
