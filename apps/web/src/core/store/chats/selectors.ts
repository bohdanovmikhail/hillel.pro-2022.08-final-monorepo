import { IState } from "../rootReducer";

export const selectChats = (state: IState) => state.chats;
export const selectChatsList = (state: IState) => selectChats(state).list;
