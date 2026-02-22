import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { Camera, Phone, MoreVertical, Paperclip } from "lucide-react";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";

import  doctor  from "../../Profile/DoctorProfile/ProfileDesignDoctor"
import CameraModal from "./CameraModal";
import CallModal from "./CallModal";
import VideoCallModal from "./VideoCallModal";

const ChatDesign = () => {

  // 🔥 Replace this with actual logged-in patient id (context / auth later)
  const loggedInPatientId = 2;

  // ✅ Filter doctors linked to this patient
  const contacts = useMemo(() => {
    return doctor.filter(doc =>
      doc.patientID.includes(loggedInPatientId)
    );
  }, [loggedInPatientId]);

  // ✅ Initialize chats dynamically
  const [chats, setChats] = useState(() => {
    const initialChats = {};
    contacts.forEach(doc => {
      initialChats[doc.id] = [];
    });
    return initialChats;
  });

  const [activeChat, setActiveChat] = useState(
    contacts.length > 0 ? contacts[0].id : null
  );

  const [input, setInput] = useState("");

  const [showCamera, setShowCamera] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);

  const chatRef = useRef(null);

  // ✅ Scroll to bottom on new message
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chats, activeChat]);

  // ✅ Send message
  const sendMessage = () => {
    if (!input.trim() || !activeChat) return;

    const newMessage = {
      id: chats[activeChat]?.length + 1,
      text: input,
      type: "outgoing",
    };

    setChats(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage],
    }));

    setInput("");
  };

  const activeDoctor = contacts.find(d => d.id === activeChat);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* ================= Sidebar ================= */}
      <div className="w-1/4 bg-white border-r border-gray-300 flex flex-col">

        <header className="p-4 border-b flex justify-between items-center bg-indigo-600 text-white">
          <h1 className="text-xl font-semibold">Messages</h1>
          <MoreVertical className="w-5 h-5 cursor-pointer" />
        </header>

        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {contacts.length === 0 && (
            <p className="text-gray-500 text-sm">
              No doctors assigned yet.
            </p>
          )}

          {contacts.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setActiveChat(doc.id)}
              className={`flex items-center cursor-pointer p-2 rounded-md ${
                activeChat === doc.id
                  ? "bg-indigo-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={doc.profilePicture}
                alt={doc.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h2 className="font-semibold">{doc.name}</h2>
                <p className="text-sm text-gray-500 truncate w-40">
                  {chats[doc.id]?.slice(-1)[0]?.text || "No messages yet"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Chat Area ================= */}
      <div className="flex-1 flex flex-col bg-gray-50">

        {/* Chat Header */}
        <header className="bg-white p-4 border-b flex justify-between items-center">
          {activeDoctor ? (
            <>
              <NavLink to={`/patient/doctor/${activeDoctor.id}`}>
                <h1 className="text-xl font-semibold hover:text-indigo-600 cursor-pointer">
                  {activeDoctor.name}
                </h1>
              </NavLink>

              <div className="flex items-center gap-4 text-gray-600">
                <Phone
                  className="w-5 h-5 cursor-pointer hover:text-indigo-600"
                  onClick={() => {
                    setCallAccepted(false);
                    setShowCall(true);
                  }}
                />

                <VideoCameraIcon
                  className="w-6 h-6 cursor-pointer hover:text-indigo-600"
                  onClick={() => {
                    setCallAccepted(false);
                    setShowVideoCall(true);
                  }}
                />
              </div>
            </>
          ) : (
            <p className="text-gray-500">Select a doctor to start chatting</p>
          )}
        </header>

        {/* Chat Messages */}
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          {activeChat && chats[activeChat]?.length === 0 && (
            <p className="text-gray-400 text-sm">
              No messages yet. Start the conversation.
            </p>
          )}

          {activeChat &&
            chats[activeChat]?.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.type === "outgoing"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs shadow-sm ${
                    msg.type === "outgoing"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
        </div>

        {/* Chat Input */}
        {activeDoctor && (
          <footer className="bg-white border-t p-4">
            <div className="flex items-center gap-3">
              <Paperclip className="w-5 h-5 text-gray-600 cursor-pointer" />

              <Camera
                className="w-5 h-5 text-gray-600 cursor-pointer"
                onClick={() => setShowCamera(true)}
              />

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
              />

              <button
                onClick={sendMessage}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
              >
                Send
              </button>
            </div>
          </footer>
        )}
      </div>

      {/* ================= Modals ================= */}
      {showCamera && (
        <CameraModal onClose={() => setShowCamera(false)} />
      )}

      {showCall && activeDoctor && (
        <CallModal
          person={activeDoctor.name}
          accepted={callAccepted}
          onAccept={() => setCallAccepted(true)}
          onDecline={() => setShowCall(false)}
        />
      )}

      {showVideoCall && activeDoctor && (
        <VideoCallModal
          person={activeDoctor.name}
          accepted={callAccepted}
          onAccept={() => setCallAccepted(true)}
          onDecline={() => setShowVideoCall(false)}
        />
      )}
    </div>
  );
};

export default ChatDesign;