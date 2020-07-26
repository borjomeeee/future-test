import React from "react";

export interface ILabeledInputComponent {
  error: string;
  label: string;
}

const LabeledInputComponent = ({
  error,
  label,

  children,
}: ILabeledInputComponent & React.Props<"div">) => {
  return (
    <>
      <label htmlFor="inputFirstName">{label}</label>
      {children}

      {error.length > 0 && <div className="common__error">{error}</div>}
    </>
  );
};

export default LabeledInputComponent;
