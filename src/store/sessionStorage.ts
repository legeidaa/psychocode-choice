import { RootState } from "./store";

export const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem("state");

        if (serializedState === null) {
            return undefined;
        }
        console.log(serializedState);
        

        return JSON.parse(serializedState);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        return undefined;
    }
};

export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        
        sessionStorage.setItem("state", serializedState);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        return undefined;
    }
};