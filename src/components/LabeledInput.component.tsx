import React from "react";

export interface ILabeledInputComponent {
  error: string;
  label: string;
}

const LabeledInputComponent = ({
  error,
  label,
  ...props
}: React.ComponentProps<"input"> & ILabeledInputComponent) => {
  console.log(error);
  return (
    <>
      <label htmlFor="inputFirstName">{label}</label>
      <input {...props} />

      {error.length > 0 && <div className="common__error">{error}</div>}
    </>
  );
};

export default LabeledInputComponent;
