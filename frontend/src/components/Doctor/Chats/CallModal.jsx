import React from "react";

const CallModal = ({ person, onAccept, onDecline, accepted }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg text-center w-80">
        <img
          src="https://i.pravatar.cc/150?img=12"
          className="w-24 h-24 rounded-full mx-auto"
          alt="profile"
        />

        {!accepted && (
          <h2 className="text-xl font-semibold mt-4">{person}</h2>
        )}

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={onDecline}
            className="bg-red-500 text-white px-4 py-2 rounded-full"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="bg-green-500 text-white px-4 py-2 rounded-full"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallModal;