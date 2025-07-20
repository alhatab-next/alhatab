"use client";
import { useState } from "react";
import VoiceChat from "./VoiceChat";

export default function VoiceWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-2 w-80 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span>Chatbot</span>
            <button onClick={() => setIsOpen(false)}>✖️</button>
          </div>
          <VoiceChat />
        </div>
      )}
    </div>
  );
}
