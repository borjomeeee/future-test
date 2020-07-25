import React, { useState } from "react";

const useInput = (): [
  string,
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => boolean
] => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const checkValid = (): boolean => {
    if (inputValue.length === 0) {
      setInputError("Поле не должно быть пустым");
      return false;
    }
    return true;
  };

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputError) {
      setInputError("");
    }

    setInputValue(event.target.value);
  };

  return [inputValue, inputError, onChangeValue, checkValid];
};

export default useInput;
