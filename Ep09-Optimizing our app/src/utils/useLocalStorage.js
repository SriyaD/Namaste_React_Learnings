import { useState, useEffect } from "react";

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const value_string = window.localStorage.getItem(key);
    return JSON.parse(value_string) || [];
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};


export default useLocalStorage;
