import { useContext } from "react";
import { ToggleContext } from "./Toggle";

import "./Toggle.scss";

const ToggleReset = ({
  className = "",
  onReset = () => {},
  customReset,
  buttonLabel = "Reset",
  ...otherProps
}) => {
  const isCustomReset = customReset !== undefined;
  const { setOn } = useContext(ToggleContext);
  const customClassName = ["reset-button", className].join(" ");
  const handleReset = () => setOn(false);
  const onResetClick = isCustomReset ? onReset : handleReset;
  return (
    <button className={customClassName} onClick={onResetClick} {...otherProps}>
      {buttonLabel}
    </button>
  );
};

export default ToggleReset;
