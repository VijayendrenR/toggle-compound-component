import { useContext } from "react";
import { ToggleContext } from "./Toggle";

import "./Toggle.scss";

const Switch = ({
  containerClassName = "",
  buttonOnClassName = "",
  buttonOffClassName = "",
  labelOptions = ["On", "Off"],
  isDisabled = false,
  ...otherProps
}) => {
  const { isOn, toggleIsOn } = useContext(ToggleContext);
  const customContainerClassName = [
    "toggle-container",
    containerClassName
  ].join(" ");
  const customButtonOnClassName = ["dialog-button-on", buttonOnClassName].join(
    " "
  );
  const customButtonOffClassName = [
    "dialog-button-off",
    buttonOffClassName
  ].join(" ");
  const buttonStyles = isOn
    ? customButtonOnClassName
    : customButtonOffClassName;
  return (
    <div
      className={customContainerClassName}
      onClick={!isDisabled ? toggleIsOn : () => {}}
      {...otherProps}
    >
      <div className={isDisabled ? "disabled-button" : buttonStyles}>
        {isOn ? labelOptions[0] : labelOptions[1]}
      </div>
    </div>
  );
};

export default Switch;
