import { IState } from "../rootReducer";

export const selectUsers = (state: IState) => state.users;
export const selectUserById = (state: IState, userId: string) => selectUsers(state).map[userId];
