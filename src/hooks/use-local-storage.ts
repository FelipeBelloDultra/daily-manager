// Packages
import { useEffect, useState } from "react";

type IStorageValue<T> = [T, (value: T) => void];

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): IStorageValue<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const setValue = (value: T): void => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
};
