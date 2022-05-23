import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import "./styles.css";

const CORRECT_PIN_CODE = "111222";

const PinCode = () => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const checkPinCode = () => {
    const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

    setBtnIsPressed(true);
    setIsPinCodeValid(isPinCodeValid);
    if (!isPinCodeValid) setPinCode("");
  };

  const handlePinChange = pinCode => {
    setPinCode(pinCode);
    setBtnIsPressed(false);
  };

  return (
    <>
      <ReactCodeInput
        id="pinCode"
        type="password"
        isValid={isPinCodeValid}
        fields={6}
        onChange={handlePinChange}
        value={pinCode}
      />
      <label>PinCode from state: {pinCode}</label>
      <label>Correct pin code: {CORRECT_PIN_CODE}</label>
      <label>{isPinCodeValid && btnIsPressed && "Valid"}</label>
      <label>{!isPinCodeValid && btnIsPressed && "Not valid"}</label>
      <button onClick={checkPinCode}>Check pin</button>
    </>
  );
};

export default PinCode;
