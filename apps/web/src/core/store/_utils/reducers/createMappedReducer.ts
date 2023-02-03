import { combineReducers } from 'redux';

import { _BaseModel } from '@chat/models';

import { createListReducer } from './createListReducer';
import { createMapReducer } from './createMapReducer';

export function createMappedReducer<Entity extends _BaseModel>({
  actions: { ADD, UPDATE, REMOVE },
  initial = [],
}: IParams<Entity>) {
  const idsReducer = createListReducer<Entity>({
    actions: { ADD, REMOVE },
    initial,
    pickFromEntity: (entity: Entity) => entity.id,
  });

  const mapReducer = createMapReducer({
    actions: { ADD, UPDATE, REMOVE },
    initial,
  });

  return combineReducers({
    ids: idsReducer,
    map: mapReducer,
  });
}

interface IParams<Entity extends _BaseModel> {
  actions: IActions;
  initial?: Entity[];
}

interface IActions {
  ADD: string;
  UPDATE: string;
  REMOVE: string;
}
