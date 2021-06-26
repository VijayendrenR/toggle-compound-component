import { useContext } from "react";
import { ToggleContext } from "./Toggle";

const ToggleOff = ({ children }) => {
  const { isOn } = useContext(ToggleContext);
  return !isOn ? children : null;
};

export default ToggleOff;
