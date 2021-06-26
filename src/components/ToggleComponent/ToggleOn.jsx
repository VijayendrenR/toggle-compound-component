import { useContext } from "react";
import { ToggleContext } from "./Toggle";

const ToggleOn = ({ children }) => {
  const { isOn } = useContext(ToggleContext);
  return isOn ? children : null;
};

export default ToggleOn;
