import { useCallback, useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(localStorage.getItem(key));
  }, []);

  const setItem = useCallback(
    (newValue) => {
      try {
        if (newValue) {
          localStorage.setItem(key, JSON.stringify(newValue));
        } else {
          localStorage.removeItem(key);
        }
        setValue(newValue);
      } catch (err) {
        console.error(
          `Error setting setting value for local storage key [${key}]`,
          err
        );
      }
    },
    [key]
  );
  return { setItem, value };
};

export default useLocalStorage;
