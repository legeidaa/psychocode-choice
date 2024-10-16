import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { steps } from "../components/steps/steps";
interface Choice {
    title: string;
    weigth?: number;
}

type Choices = Choice[];
interface InitialState {
    dilemma: string;
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
    dilemma: "",
    step: 0,
    prosToDo: [{ title: "aa" }, { title: "bb" }, { title: "cc" }],
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
            state[row].push({ title });
        },

        changeChoice: (state, action: PayloadAction<ChangeChoicePayload>) => {
            const i = action.payload.i;
            const title = action.payload.title;
            const weigth = action.payload.weigth;
            const row = action.payload.row;

            if (title) {
                state[row][i].title = title;
            }

            if (weigth) {
                state[row][i].weigth = weigth;
            }
        },

        deleteChoice: (
            state,
            action: PayloadAction<{ row: ChoicesRows; i: number }>
        ) => {
            const { row, i } = action.payload;
            console.log(row, i);
            state[row] = state[row].filter((_, index) => index !== i);
        },
    },
});

export const {
    setDilemma,
    deleteChoice,
    setStep,
    setNextStep,
    setPrevStep,
    changeChoice,
    addChoice,
} = quizDataSlice.actions;

export const quizDataReducer = quizDataSlice.reducer;
