import React, { useRef, useEffect, useState } from "react";

const CameraModal = ({ onClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    };
    startCamera();

    return () => {
      videoRef.current?.srcObject?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    setPhoto(canvas.toDataURL("image/png"));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-96 text-center">
        {!photo ? (
          <>
            <video ref={videoRef} autoPlay className="w-full rounded" />
            <button
              onClick={capturePhoto}
              className="mt-3 bg-indigo-500 text-white px-4 py-2 rounded"
            >
              Click Photo
            </button>
          </>
        ) : (
          <img src={photo} alt="Captured" className="rounded" />
        )}

        <canvas ref={canvasRef} className="hidden" />
        <button
          onClick={onClose}
          className="mt-3 text-red-500 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CameraModal;