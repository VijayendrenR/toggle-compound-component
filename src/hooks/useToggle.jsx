import { useCallback, useState } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((value) => !value), []);
  const customToggle = (toggleValue) => setValue(toggleValue);
  return [value, toggle, customToggle];
};

export default useToggle;
