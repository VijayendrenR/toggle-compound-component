import { useState } from "react";

import Input from "./components/Input";
// import ToggleSwitch from "./components/ToggleSwitch";
import "./styles.css";

import Toggle from "./components/ToggleComponent/Toggle";
import useToggle from "./hooks/useToggle";

export default function App() {
  // customaisation
  const [isShow, toggleShow, onShow] = useToggle(false);
  const [count, setCount] = useState(0);
  const disable = count > 3;
  const customToggle = () => {
    if (!disable) {
      setCount((prev) => prev + 1);
      toggleShow((prevState) => !prevState);
    }
  };
  const customShow = () => onShow(true);
  const customHide = () => onShow(false);
  const customReset = () => {
    setCount(0);
    onShow(false);
  };

  // helpers
  const [password, setPassword] = useState("");
  const onSelectRender = () => (
    <div className="input-container">
      <Input type={"password"} value={password} onValueChange={setPassword} />
    </div>
  );
  const onUnSelectRender = () => (
    <div className="input-container">
      <Input type={"text"} value={password} onValueChange={setPassword} />
    </div>
  );
  return (
    <div className="App">
      {/* ToggleSwitch component sample */}
      {/* <ToggleSwitch
        width="90%"
        height="90%"
        buttonColor="#1ab34f"
        labelOptions={["ON", "OFF"]}
        selectedBackGroundColor="green"
        onSelectedComponent={onSelectRender}
        onNonSelectedComponent={onUnSelectRender}
      /> */}

      {/* Toggle Compound Component Sample */}
      <Toggle classname="toggle-wrapper">
        <Toggle.Switch />
        <Toggle.ToggleOn>{onSelectRender()}</Toggle.ToggleOn>
        <Toggle.ToggleOff>{onUnSelectRender()}</Toggle.ToggleOff>
      </Toggle>

      {/* Toggle Compound Component Sample */}
      <Toggle
        allowCustom={true}
        customIsOn={isShow}
        customToggle={customToggle}
        customOnFunc={customShow}
        customOffFunc={customHide}
        classname="toggle-wrapper"
      >
        <Toggle.Switch
          labelOptions={["Show", "Hide"]}
          containerClassName="custom-container-switch"
          isDisabled={disable}
        />
        <Toggle.ToggleOn>{onSelectRender()}</Toggle.ToggleOn>
        <Toggle.ToggleOff>{onUnSelectRender()}</Toggle.ToggleOff>
        {disable && (
          <Toggle.ToggleReset
            className="custom-reset-btn"
            customReset={true}
            onReset={customReset}
          />
        )}
      </Toggle>
    </div>
  );
}
