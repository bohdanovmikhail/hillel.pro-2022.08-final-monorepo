import { IState } from '../rootReducer';

export const selectFeature = (state: IState) => state.messages;
