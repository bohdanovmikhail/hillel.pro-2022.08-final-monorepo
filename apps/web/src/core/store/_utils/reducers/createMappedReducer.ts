import { combineReducers } from 'redux';

import { _BaseModel } from '@chat/models';

import { PayloadAction } from '../actions/createPayloadAction';

export function createMappedReducer<Entity extends _BaseModel>({
  actions: { ADD },
  initial = [],
}: IMappedReducerParams<Entity>) {
  const initialList = initial;
  const initialIds = initial.map((entity) => entity.id);
  const initialMap = initial.reduce((map, entity) => ({
    ...map,
    [entity.id]: entity,
  }), {});

  function listReducer(
    state: Entity[] = initialList,
    action: PayloadAction<string, Entity>,
  ) {
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

  function idsReducer(
    state: string[] = initialIds,
    action: PayloadAction<string, Entity>,
  ) {
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

  function mapReducer(
    state: Record<string, Entity> = initialMap,
    action: PayloadAction<string, Entity>,
  ) {
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

interface IMappedReducerParams<Entity extends _BaseModel> {
  actions: IMappedReducerActions;
  initial?: Entity[];
}

interface IMappedReducerActions {
  ADD: string;
}
