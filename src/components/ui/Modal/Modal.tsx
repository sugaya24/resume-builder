import React, { ReactNode } from "react";

type ModalProps = {
  htmlFor: string;
  children: ReactNode;
};
function Modal({ htmlFor, children }: ModalProps) {
  return (
    <label htmlFor={htmlFor} className="modal">
      <label htmlFor={htmlFor} className="modal-box relative">
        <label
          htmlFor={htmlFor}
          className="btn btn-outline btn-circle btn-sm absolute right-4 top-4"
        >
          ✕
        </label>
        {children}
      </label>
    </label>
  );
}

export default Modal;
