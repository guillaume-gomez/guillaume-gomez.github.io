import { type ReactNode } from "react";

interface ModelProps {
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
}

function Modal({visible, onClose, children} : ModalProps) {
  return (
    <dialog
      id="my_modal_1"
      className={`modal ${visible ? "modal-open" : ""}`}
    >
      <div
        className="modal-box w-11/12 max-w-5xl h-96"
        style={{border: "4px solid black"}}
      >
        {children}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={onClose}>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal;