import React, { useState } from "react";
import Modal from "./modal";

function Parent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <h1>React Portal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a modal</h2>
        <p>Click outside or on the close button to dismiss.</p>
      </Modal>
    </div>
  );
}

export default Parent;
