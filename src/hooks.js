import { useState } from "react";

export const usePersistedState = (initialState, key) => {
  const rawStateFromStorage = localStorage.getItem(key);
  const stateFromStorage =
    rawStateFromStorage && JSON.parse(rawStateFromStorage);

  const [value, setter] = useState(stateFromStorage || initialState);

  return [
    value,
    data => {
      localStorage.setItem(key, JSON.stringify(data));
      setter(data);
    }
  ];
};
