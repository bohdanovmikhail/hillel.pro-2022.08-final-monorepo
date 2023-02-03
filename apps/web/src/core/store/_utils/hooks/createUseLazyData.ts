import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RemoveFirstFromTuple } from '@chat/types';
import { _BaseModel } from '@chat/models';

import { IState } from '../../rootReducer';

export function createUseLazyData<Entity extends _BaseModel>(
  selector: ILazyDataSelector<Entity>,
  actionCreator: any,
) {
  return (...args: RemoveFirstFromTuple<Parameters<typeof selector>>) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const data = useSelector((state: IState) => selector(state, ...args));

    useEffect(() => {
      if (!data) {
        setIsLoading(true);
        dispatch(actionCreator(...args))
          .finally(() => {
            setIsLoading(false);
          })
      } else {
        setIsLoading(false);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, ...args]);

    return [data, isLoading] as ILazyDataResult<Entity>;
  };
}

type ILazyDataResult<Entity extends _BaseModel> = [Entity, boolean];
type ILazyDataSelector<Entity extends _BaseModel> = (state: IState, ...args: any) => Entity;
