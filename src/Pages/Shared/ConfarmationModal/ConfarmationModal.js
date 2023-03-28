import React from "react";

const ConfarmationModal = ({
  title,
  message,
  closeModal,
  handleDeleteDoctor,
  modalData,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confarmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4 text-red-800 font-bold">{message}</p>
          <div className="modal-action">
            <label
              htmlFor="confarmation-modal"
              className="btn btn-sm btn-outline"
              onClick={() => handleDeleteDoctor(modalData)}
            >
              Delete
            </label>
            <label
              onClick={closeModal}
              className="btn btn-sm btn-error btn-outline"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfarmationModal;
