import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { Camera, Phone, MoreVertical, Paperclip } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

import CameraModal from "./CameraModal";
import CallModal from "./CallModal";
import VideoCallModal from "./VideoCallModal";
import { NavLink } from "react-router-dom";

const ChatDesign = () => {

  const contacts = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Martin" },
    { id: 3, name: "Charlie" },
  ];

  const [chats, setChats] = useState({
    1: [
      { id: 1, text: "Hey Bob, how's it going?", type: "incoming" },
      { id: 2, text: "Hi Alice! I'm good.", type: "outgoing" },
    ],
    2: [
      { id: 1, text: "That pizza place was amazing!", type: "incoming" },
    ],
    3: [
      { id: 1, text: "Any movie recommendations?", type: "incoming" },
    ],
  });

  const [activeChat, setActiveChat] = useState(1);
  const [input, setInput] = useState("");

  const [showCamera, setShowCamera] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);

  const chatRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: chats[activeChat]?.length + 1,
      text: input,
      type: "outgoing",
    };

    setChats({
      ...chats,
      [activeChat]: [...(chats[activeChat] || []), newMessage],
    });

    setInput("");
  };

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chats, activeChat]);

  const activePerson = contacts.find(c => c.id === activeChat)?.name;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* ================= Sidebar ================= */}
      <div className="w-1/4 bg-white border-r border-gray-300 flex flex-col">

        <header className="p-4 border-b flex justify-between items-center bg-indigo-600 text-white">
          <h1 className="text-xl font-semibold">Messages</h1>
          <MoreVertical className="w-5 h-5 cursor-pointer" />
        </header>

        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setActiveChat(contact.id)}
              className={`flex items-center cursor-pointer p-2 rounded-md ${
                activeChat === contact.id
                  ? "bg-indigo-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="w-10 h-10 bg-indigo-400 rounded-full mr-3"></div>
              <div>
                <h2 className="font-semibold">{contact.name}</h2>
                <p className="text-sm text-gray-500 truncate w-40">
                  {chats[contact.id]?.slice(-1)[0]?.text || "No messages yet"}
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
          
          <NavLink to="/doctor/profile">
            <h1 className="text-xl font-semibold hover:text-indigo-600 cursor-pointer">
              {activePerson}
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
        </header>

        {/* Chat Messages */}
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          {chats[activeChat]?.map((msg) => (
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
      </div>

      {/* ================= Modals ================= */}
      {showCamera && (
        <CameraModal onClose={() => setShowCamera(false)} />
      )}

      {showCall && (
        <CallModal
          person={activePerson}
          accepted={callAccepted}
          onAccept={() => setCallAccepted(true)}
          onDecline={() => setShowCall(false)}
        />
      )}

      {showVideoCall && (
        <VideoCallModal
          person={activePerson}
          accepted={callAccepted}
          onAccept={() => setCallAccepted(true)}
          onDecline={() => setShowVideoCall(false)}
        />
      )}
    </div>
  );
};

export default ChatDesign;