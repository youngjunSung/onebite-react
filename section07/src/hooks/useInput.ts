import { useState, useCallback } from "react";

type ReturnTypes<T> = [
  T,
  React.Dispatch<React.SetStateAction<T>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

export const useInput = <T>(initValue: T): ReturnTypes<T> => {
  const [state, setState] = useState(initValue);
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setState(e.target.value as unknown as T),
    [state]
  );
  return [state, setState, handler];
};
