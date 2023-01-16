import { useState } from 'react';

export type FormDataSetDirect<Data extends object, Key extends keyof Data = keyof Data> = (key: Key, value: Data[Key]) => void;
export type FormDataSetExact<Data extends object, Key extends keyof Data> = (value: Data[Key]) => void;
export type FormDataSetCreator<Data extends object> = <Key extends keyof Data>(key: Key) => FormDataSetExact<Data, Key>;
export type UseFormDataResult<Data extends object> = [Data, FormDataSetCreator<Data>, FormDataSetDirect<Data>];

export function useFormData<Data extends object>(defaultData: Data): UseFormDataResult<Data> {
  const [data, setData] = useState<Data>(defaultData);

  return [
    data,
    (key) => (value) => setData({ ...data, [key]: value }),
    (key, value) => setData({ ...data, [key]: value }),
  ];
}
