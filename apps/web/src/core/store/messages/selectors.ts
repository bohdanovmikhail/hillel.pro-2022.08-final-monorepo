import { IState } from '../rootReducer';

export const selectMessages = (state: IState) => state.messages;
export const selectMessagesList = (state: IState) => selectMessages(state).list;
