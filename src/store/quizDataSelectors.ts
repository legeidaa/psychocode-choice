import { RootState } from "./store";

export const step = (state: RootState) => state.quiz.step;
export const dilemma = (state: RootState) => state.quiz.dilemma;
export const prosToDo = (state: RootState) => state.quiz.prosToDo;
export const consToDo = (state: RootState) => state.quiz.consToDo;
export const prosNotToDo = (state: RootState) => state.quiz.prosNotToDo;
export const consNotToDo = (state: RootState) => state.quiz.consNotToDo;
