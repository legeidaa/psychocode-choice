import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Choice {
    title: string;
    weigth?: number | undefined;
}

interface ChangeChoicePayload extends Choice {
    i: number;
}
type Choices = Choice[];

interface initialState {
    dilemma: string;
    step: number;
    prosToDo: Choices;
    consToDo: Choices;
    prosNotToDo: Choices;
    consNotToDo: Choices;
}

const initialState: initialState = {
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
        setNextStep: (state) => {
            state.step = state.step + 1;
            window.sessionStorage.setItem("step", String(state.step));
        },
        setPrevStep: (state) => {
            state.step = state.step - 1;
            window.sessionStorage.setItem("step", String(state.step));
        },
        addProsToDo: (state, action: PayloadAction<Choice>) => {
            state.prosToDo.push(action.payload);
        },
        changeProsToDo: (state, action: PayloadAction<ChangeChoicePayload>) => {
            const i = action.payload.i;
            const title = action.payload.title;
            const weigth = action.payload.weigth || action.payload.weigth;

            state.prosToDo[i].title = title;
            if (weigth) {
                state.prosToDo[i].weigth = weigth;
            }
        },
        removeProsToDo: (state, action) => {
            state.prosToDo = state.prosToDo.filter(
                (item) => item !== action.payload
            );
        },
        addConsToDo: (state, action) => {
            state.consToDo.push(action.payload);
        },

        changeConsToDo: (state, action: PayloadAction<ChangeChoicePayload>) => {
            const i = action.payload.i;
            const title = action.payload.title;
            const weigth = action.payload.weigth || action.payload.weigth;

            state.consToDo[i].title = title;
            if (weigth) {
                state.consToDo[i].weigth = weigth;
            }
        },

        removeConsToDo: (state, action) => {
            state.consToDo = state.consToDo.filter(
                (item) => item !== action.payload
            );
        },
        addProsNotToDo: (state, action) => {
            state.prosNotToDo.push(action.payload);
        },

        changeProsNotToDo: (state, action: PayloadAction<ChangeChoicePayload>) => {
            const i = action.payload.i;
            const title = action.payload.title;
            const weigth = action.payload.weigth || action.payload.weigth;

            state.prosNotToDo[i].title = title;
            if (weigth) {
                state.prosNotToDo[i].weigth = weigth;
            }
        },
        removeProsNotToDo: (state, action) => {
            state.prosNotToDo = state.prosNotToDo.filter(
                (item) => item !== action.payload
            );
        },
        addConsNotToDo: (state, action) => {
            state.consNotToDo.push(action.payload);
        },

        changeConsNotToDo: (state, action: PayloadAction<ChangeChoicePayload>) => {
            const i = action.payload.i;
            const title = action.payload.title;
            const weigth = action.payload.weigth || action.payload.weigth;

            state.consNotToDo[i].title = title;
            if (weigth) {
                state.consNotToDo[i].weigth = weigth;
            }
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
    changeProsToDo,
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
