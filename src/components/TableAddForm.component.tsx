import React from "react";

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
    ,
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
          <LabeledInputComponent
            type="text"
            className="form__input form-control"
            id="inputId"
            placeholder="Id"
            value={idInputValue}
            error={idInputError}
            onChange={setIdInputValue}
            label="Id"
          />
        </div>
        <div className="form__item form-group col-md-5">
          <LabeledInputComponent
            type="text"
            className="form__input form-control"
            id="inputFirstName"
            placeholder="FirstName"
            error={firstNameInputError}
            value={firstNameInputValue}
            onChange={setFirstNameInputValue}
            label="FirstName"
          />
        </div>

        <div className="form__item form-group col-md-5">
          <LabeledInputComponent
            type="text"
            className="form__input form-control"
            id="inputLastName"
            placeholder="LastName"
            value={lastNameInputValue}
            error={lastNameInputError}
            onChange={setLastNameInputValue}
            label="LastName"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form__item form-group col-md-6">
          <LabeledInputComponent
            type="email"
            className="form__input form-control"
            id="inputEmail"
            placeholder="Email"
            value={emailInputValue}
            error={emailInputError}
            onChange={setEmailInputValue}
            label="Email"
          />
        </div>

        <div className="form__item form-group col-md-6">
          <LabeledInputComponent
            type="text"
            className="form__input form-control"
            id="inputPhone"
            placeholder="Phone"
            value={phoneInputValue}
            error={phoneInputError}
            onChange={setPhoneInputValue}
            label="Phone"
          />
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
