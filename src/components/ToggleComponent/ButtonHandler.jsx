import { useContext } from "react";
import { ToggleContext } from "./Toggle";

import "./Toggle.scss";

const ButtonHandler = ({
  className = "",
  buttonOnLabel = "On",
  buttonOffLabel = "Off",
  buttonOnClassName = "",
  buttonOffClassName = "",
  ...otherButtonProps
}) => {
  const { isOn, setOn, setOff } = useContext(ToggleContext);
  const customClassName = ["buttonContainer", className].join(" ");
  return (
    <div className={customClassName}>
      <button
        className={buttonOnClassName}
        onClick={() => setOn(true)}
        disabled={isOn}
        {...otherButtonProps}
      >
        {buttonOnLabel}
      </button>
      <button
        className={buttonOffClassName}
        onClick={() => setOff(false)}
        disabled={!isOn}
        {...otherButtonProps}
      >
        {buttonOffLabel}
      </button>
    </div>
  );
};

export default ButtonHandler;
