import { _BaseModel } from '@chat/models';

import { IPayloadAction, IAnyFn } from '../types';

export function createListReducer<
  Entity extends _BaseModel,
  PickFn extends IAnyFn = IAnyFn,
  ResultEntity extends ReturnType<PickFn> = ReturnType<PickFn>,
>({
  actions: { ADD, REMOVE },
  pickFromEntity = ((entity: Entity) => entity) as any,
  initial = [],
}: IParams<Entity, PickFn, ResultEntity>) {
  const initialData = initial.map(pickFromEntity);

  return function reducer(
    state: ResultEntity[] = initialData,
    action: IPayloadAction<Entity>,
  ): ResultEntity[] {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          pickFromEntity(action.payload),
        ];

      case REMOVE: {
        const matchTo = pickFromEntity(action.payload);
        return state.filter((entity: ResultEntity) => entity !== matchTo);
      }

      default:
        return state;
    }
  }
}

interface IParams<
  Entity extends _BaseModel,
  PickFn extends IAnyFn = IAnyFn,
  ResultEntity extends ReturnType<PickFn> = ReturnType<PickFn>,
> {
  actions: IActions;
  initial?: Entity[];
  pickFromEntity?: PickFn,
}

interface IActions {
  ADD: string;
  REMOVE: string;
}
