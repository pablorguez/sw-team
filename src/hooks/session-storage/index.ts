import { useState, useEffect } from "react";

const getSessionStorage = (key: string, defaultValue: any) => {
  const stored = sessionStorage.getItem(key);

  if (!stored) {
    return defaultValue;
  }

  return JSON.parse(stored);
};

export const useSessionStorage = (key: string, defaultValue: any = {}) => {
  const [value, setValue] = useState(getSessionStorage(key, defaultValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
