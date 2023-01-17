import { combineReducers } from 'redux';

import { _BaseModel } from '@chat/models';

import { PayloadAction } from '../actions/createPayloadAction';


export function createMappedReducer<Entity extends _BaseModel>({
  actions: { ADD },
}: IMappedReducerParams) {
  function listReducer(state: Entity[] = [], action: PayloadAction<string, Entity>) {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          action.payload,
        ];

      default:
        return state;
    }
  }

  function idsReducer(state: string[] = [], action: PayloadAction<string, Entity>) {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          action.payload.id,
        ];

      default:
        return state;
    }
  }

  function mapReducer(state: Record<string, Entity> = {}, action: PayloadAction<string, Entity>) {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          [action.payload.id]: action.payload,
        };

      default:
        return state;
    }
  }

  return combineReducers({
    list: listReducer,
    ids: idsReducer,
    map: mapReducer,
  })
}

interface IMappedReducerParams {
  actions: IMappedReducerActions;
}

interface IMappedReducerActions {
  ADD: string;
}
