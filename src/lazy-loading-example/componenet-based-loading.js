import React, { Suspense, useState } from "react";

const Modal = React.lazy(() => import("./modal"));

function ComponentbasedLoading() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>

      {isModalOpen && (
        <Suspense fallback={<div>Loading modal...</div>}>
          <Modal closeModal={toggleModal} />
        </Suspense>
      )}
    </div>
  );
}

export default ComponentbasedLoading;
