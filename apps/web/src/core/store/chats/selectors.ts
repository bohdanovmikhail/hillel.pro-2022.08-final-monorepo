import { IState } from "../rootReducer";

export const selectChats = (state: IState) => state.chats;
export const selectChatById = (state: IState, id: string) => selectChats(state).map[id];
export const selectChatsList = (state: IState) => selectChats(state).ids.map(id => selectChatById(state, id));
