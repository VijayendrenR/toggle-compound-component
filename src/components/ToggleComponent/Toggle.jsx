import { createContext, useMemo } from "react";
import useToggle from "../../hooks/useToggle";
import Switch from "./Switch";
import ButtonHandler from "./ButtonHandler";
import ToggleOn from "./ToggleOn";
import ToggleOff from "./ToggleOff";
import ToggleReset from "./ToggleReset";

import "./Toggle.scss";

export const ToggleContext = createContext();
const { Provider } = ToggleContext;

const Toggle = ({
  children,
  classname,
  allowCustom,
  customIsOn,
  customToggle,
  customOnFunc,
  customOffFunc,
  ...otherProps
}) => {
  const isCustomAllowed = allowCustom !== undefined;
  const [isOn, onToggle, setIsOn] = useToggle(false);
  const getStateValue = isCustomAllowed ? customIsOn : isOn;
  const getToggle = isCustomAllowed ? customToggle : onToggle;
  const getOnFunc = isCustomAllowed ? customOnFunc : setIsOn;
  const getOffFunc = isCustomAllowed ? customOffFunc : setIsOn;
  const value = useMemo(
    () => ({
      isOn: getStateValue,
      toggleIsOn: getToggle,
      setOn: getOnFunc,
      setOff: getOffFunc
    }),
    [getStateValue, getToggle, getOnFunc, getOffFunc]
  );
  const customClassName = ["ToggleWrapper", classname].join(" ");
  return (
    <Provider value={value}>
      <div className={customClassName} {...otherProps}>
        {children}
      </div>
    </Provider>
  );
};

Toggle.Switch = Switch;
Toggle.ButtonHandler = ButtonHandler;
Toggle.ToggleOn = ToggleOn;
Toggle.ToggleOff = ToggleOff;
Toggle.ToggleReset = ToggleReset;

export default Toggle;
