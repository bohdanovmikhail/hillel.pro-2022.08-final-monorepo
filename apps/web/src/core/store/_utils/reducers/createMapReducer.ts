import { IPayloadAction } from '../types';
import { omit } from 'lodash';
import { _BaseModel } from '@chat/models';

export function createMapReducer<Entity extends _BaseModel>({
  actions: { ADD, UPDATE, REMOVE },
  mapBy = 'id',
  initial = [],
}: IParams<Entity>) {
  const mappedInitial = initial.reduce((map, entity) => ({
    ...map,
    [entity[mapBy] as string]: entity,
  }), {});

  return function reducer(
    state: Record<string, Entity> = mappedInitial,
    action: IPayloadAction<Entity>,
  ) {
    switch (action.type) {
      case ADD:
      case UPDATE:
        return {
          ...state,
          [action.payload[mapBy] as string]: action.payload,
        };

      case REMOVE:
        return omit(state, action.payload.id);

      default:
        return state;
    }
  }
}

interface IParams<Entity extends _BaseModel, Key = keyof Entity> {
  actions: IActions;
  mapBy?: Key,
  initial?: Entity[];
}

interface IActions {
  ADD: string;
  UPDATE: string;
  REMOVE: string;
}
