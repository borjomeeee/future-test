import React from "react";

export interface IModalComponent {
  title: string;
  onClose: () => void;
}

const ModalComponent = ({
  children,
  title,
  onClose,
}: React.Props<"div"> & IModalComponent) => {
  return (
    <div className="common__modal">
      <div className="modal__container">
        <div className="modal__topline">
          <div className="modal__title">{title}</div>
          <div className="modal__close">
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Отмена
            </button>
          </div>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default ModalComponent;
