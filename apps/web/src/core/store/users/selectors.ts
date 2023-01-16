import { IState } from '@core/store';

export const selectFeature = (state: IState) => (state as any).feature;
