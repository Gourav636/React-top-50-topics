import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>This is a lazy-loaded Modal</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
