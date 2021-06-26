import PropTypes from "prop-types";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";

import "./ToggleSwitch.scss";

const NOT_SELECTED_STATE_STYLE = {
  backgroundColor: "#707070",
  color: "#fff",
  left: "2px"
};

const ToggleSwitch = ({
  width,
  height,
  labelOptions,
  buttonColor,
  labelColor,
  selectedBackGroundColor,
  onSelectedComponent,
  onNonSelectedComponent
}) => {
  const [selected, toggleSelected, onSelect] = useToggle(false);
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const onToggle = () => {
    if (count > 3) {
      setIsDisabled(true);
    } else {
      setCount(count + 1);
      toggleSelected();
    }
  };
  const onReset = () => {
    setCount(0);
    onSelect(false);
    setIsDisabled(false);
  };
  return (
    <div
      style={{ width, height, cursor: isDisabled ? "not-allowed" : "pointer" }}
    >
      <div
        style={selected ? { backgroundColor: selectedBackGroundColor } : {}}
        className="toggle-container"
        onClick={!isDisabled ? onToggle : () => {}}
      >
        <div
          style={
            selected
              ? { backgroundColor: buttonColor, color: labelColor }
              : NOT_SELECTED_STATE_STYLE
          }
          className={`dialog-button ${isDisabled && "disabled-button"}`}
        >
          {selected ? labelOptions[0] : labelOptions[1]}
        </div>
      </div>
      <div className="component-container">
        {selected && onSelectedComponent && onSelectedComponent()}
        {!selected && onNonSelectedComponent && onNonSelectedComponent()}
      </div>
      <div className="buttonContainer">
        <button onClick={() => onSelect(true)} disabled={selected}>
          Show
        </button>
        <button onClick={() => onSelect(false)} disabled={!selected}>
          Hide
        </button>
      </div>
      {isDisabled && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

ToggleSwitch.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  labelOptions: PropTypes.array,
  buttonColor: PropTypes.string,
  labelColor: PropTypes.string,
  selectedBackGroundColor: PropTypes.string,
  onSelectedComponent: PropTypes.func,
  onNonSelectedComponent: PropTypes.func
};

ToggleSwitch.defaultProps = {
  width: "fit-content",
  height: "fit-content",
  labelOptions: ["Yes", "No"],
  buttonColor: "#13b135",
  labelColor: "#fff",
  selectedBackGroundColor: "#c4c4c4"
};

export default ToggleSwitch;
