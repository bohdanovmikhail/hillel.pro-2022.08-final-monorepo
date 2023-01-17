import { IState } from "../rootReducer";

export const selectF = (state: IState) => (state as any).feature;
