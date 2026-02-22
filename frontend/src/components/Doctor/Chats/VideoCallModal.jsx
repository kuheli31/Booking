import React, { useRef, useEffect, useState } from "react";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  addDoc,
  onSnapshot
} from "firebase/firestore";
import { db } from "../../../firebase";

const servers = {
  iceServers: [
    { urls: ["stun:stun1.l.google.com:19302"] }
  ],
  iceCandidatePoolSize: 10
};

const VideoCallModal = ({ person, onDecline }) => {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  const [pc] = useState(new RTCPeerConnection(servers));
  const [callId, setCallId] = useState("");

  useEffect(() => {
    const startMedia = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      localVideo.current.srcObject = stream;

      stream.getTracks().forEach(track => {
        pc.addTrack(track, stream);
      });

      pc.ontrack = (event) => {
        remoteVideo.current.srcObject = event.streams[0];
      };
    };

    startMedia();
  }, [pc]);

  // CREATE CALL
  const createCall = async () => {
    const callDoc = doc(collection(db, "calls"));
    const offerCandidates = collection(callDoc, "offerCandidates");
    const answerCandidates = collection(callDoc, "answerCandidates");

    setCallId(callDoc.id);

    pc.onicecandidate = async (event) => {
      if (event.candidate) {
        await addDoc(offerCandidates, event.candidate.toJSON());
      }
    };

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    await setDoc(callDoc, { offer });

    onSnapshot(callDoc, (snapshot) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        pc.setRemoteDescription(new RTCSessionDescription(data.answer));
      }
    });

    onSnapshot(answerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          pc.addIceCandidate(
            new RTCIceCandidate(change.doc.data())
          );
        }
      });
    });
  };

  // JOIN CALL
  const joinCall = async () => {
    const callDoc = doc(db, "calls", callId);
    const answerCandidates = collection(callDoc, "answerCandidates");
    const offerCandidates = collection(callDoc, "offerCandidates");

    pc.onicecandidate = async (event) => {
      if (event.candidate) {
        await addDoc(answerCandidates, event.candidate.toJSON());
      }
    };

    const callData = (await getDoc(callDoc)).data();

    await pc.setRemoteDescription(
      new RTCSessionDescription(callData.offer)
    );

    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);

    await updateDoc(callDoc, { answer });

    onSnapshot(offerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          pc.addIceCandidate(
            new RTCIceCandidate(change.doc.data())
          );
        }
      });
    });
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">

      <div className="flex gap-4 mb-4">
        <video ref={localVideo} autoPlay muted className="w-64 rounded" />
        <video ref={remoteVideo} autoPlay className="w-64 rounded" />
      </div>

      <div className="flex gap-3">
        <button
          onClick={createCall}
          className="bg-green-500 px-4 py-2 text-white rounded"
        >
          Create Call
        </button>

        <input
          value={callId}
          onChange={(e) => setCallId(e.target.value)}
          placeholder="Call ID"
          className="p-2 rounded"
        />

        <button
          onClick={joinCall}
          className="bg-blue-500 px-4 py-2 text-white rounded"
        >
          Join
        </button>

        <button
          onClick={onDecline}
          className="bg-red-500 px-4 py-2 text-white rounded"
        >
          End
        </button>
      </div>
    </div>
  );
};

export default VideoCallModal;