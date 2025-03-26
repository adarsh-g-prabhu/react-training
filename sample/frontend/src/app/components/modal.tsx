'use client';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function CustomModal() {
  const [showModal, setShowModal] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');

  const handleShowModal = () => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    setCurrentDateTime(formattedDateTime);
    setShowModal(true);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-4 left-4">
        <Button variant="primary" onClick={handleShowModal}>
          Show Date & Time
        </Button>
      </div>

     
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-opacity-10 z-50">
          <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-semibold">Current Date & Time</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-black text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <div className="mt-4">
              <p>{currentDateTime}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomModal;
