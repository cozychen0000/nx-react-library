import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState(initialValue);

  // We will use this flag to trigger the reading from localStorage
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Use an effect hook in order to prevent SSR inconsistencies and errors.
  // This will update the state with the value from the local storage after
  // the first initial value is applied.
  useEffect(() => {
    const fromLocal = () => {
      if (typeof window === "undefined") return initialValue;

      try {
        const item = window.localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    };

    setStoredValue(fromLocal);
    setIsFirstLoad(false);
  }, [key, initialValue]);

  // State 改變時更新 LocalStorage
  useEffect(() => {
    if (isFirstLoad) return; // 避免被初始值覆蓋原值

    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue, isFirstLoad]);

  return [storedValue, setStoredValue];
}
