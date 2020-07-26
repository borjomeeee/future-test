import React from "react";
import InputMask from "react-input-mask";

import { ITableItem } from "../models/TableItem.model";

import useInput from "../hooks/useInput.hook";

import LabeledInputComponent from "./LabeledInput.component";

export interface ITableAddFormComponent {
  onSubmit: (newItem: ITableItem) => void;
}

const TableAddFormComponent = ({ onSubmit }: ITableAddFormComponent) => {
  const [
    idInputValue,
    idInputError,
    setIdInputError,
    setIdInputValue,
    idCheckValid,
  ] = useInput();
  const [
    firstNameInputValue,
    firstNameInputError,
    ,
    setFirstNameInputValue,
    firstNameCheckValid,
  ] = useInput();
  const [
    lastNameInputValue,
    lastNameInputError,
    ,
    setLastNameInputValue,
    lastNameCheckValid,
  ] = useInput();
  const [
    emailInputValue,
    emailInputError,
    setEmailInputError,
    setEmailInputValue,
    emailCheckValid,
  ] = useInput();
  const [
    phoneInputValue,
    phoneInputError,
    ,
    setPhoneInputValue,
    phoneCheckValid,
  ] = useInput();

  const customCheckValidInputs = (): boolean => {
    if (idInputValue.indexOf(".") !== -1 || isNaN(+idInputValue)) {
      setIdInputError("Id должен быть целым числом");
      return false;
    } else if (+idInputValue <= 0) {
      setIdInputError("Id должен быть больше нуля");
      return false;
    }

    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailInputValue
      )
    ) {
      setEmailInputError("Введите валидный email");
      return false;
    }

    return true;
  };

  const onSubmitAddItem = () => {
    if (
      idCheckValid() &&
      firstNameCheckValid() &&
      lastNameCheckValid() &&
      emailCheckValid() &&
      phoneCheckValid() &&
      customCheckValidInputs()
    ) {
      onSubmit({
        id: +idInputValue,
        firstName: firstNameInputValue,
        lastName: lastNameInputValue,
        email: emailInputValue,
        phone: phoneInputValue,
        address: {
          streetAddress: "",
          state: "",
          city: "",
          zip: "",
        },
        description: "",
      });
    }
  };

  return (
    <div className="table__form form">
      <div className="form-row">
        <div className="form__item form-group col-md-2">
          <LabeledInputComponent error={idInputError} label="Id">
            <input
              type="text"
              className="form__input form-control"
              id="inputId"
              placeholder="Id"
              value={idInputValue}
              onChange={setIdInputValue}
            />
          </LabeledInputComponent>
        </div>
        <div className="form__item form-group col-md-5">
          <LabeledInputComponent error={firstNameInputError} label="FirstName">
            <input
              type="text"
              className="form__input form-control"
              id="inputFirstName"
              placeholder="FirstName"
              value={firstNameInputValue}
              onChange={setFirstNameInputValue}
            />
          </LabeledInputComponent>
        </div>

        <div className="form__item form-group col-md-5">
          <LabeledInputComponent error={lastNameInputError} label="LastName">
            <input
              type="text"
              className="form__input form-control"
              id="inputLastName"
              placeholder="LastName"
              value={lastNameInputValue}
              onChange={setLastNameInputValue}
            />
          </LabeledInputComponent>
        </div>
      </div>

      <div className="form-row">
        <div className="form__item form-group col-md-6">
          <LabeledInputComponent error={emailInputError} label="Email">
            <input
              type="email"
              className="form__input form-control"
              id="inputEmail"
              placeholder="Email"
              onChange={setEmailInputValue}
              value={emailInputValue}
            />
          </LabeledInputComponent>
        </div>

        <div className="form__item form-group col-md-6">
          <LabeledInputComponent error={phoneInputError} label="Phone">
            <InputMask
              mask="(999)999-9999"
              type="text"
              className="form__input form-control"
              id="inputPhone"
              placeholder="Phone"
              value={phoneInputValue}
              onChange={setPhoneInputValue}
            />
          </LabeledInputComponent>
        </div>
      </div>

      <button
        className="form__submit btn btn-primary mt-4"
        onClick={onSubmitAddItem}
      >
        Добавить
      </button>
    </div>
  );
};

export default TableAddFormComponent;
