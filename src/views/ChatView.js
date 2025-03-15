import React, { useState, useEffect, useRef } from "react";
import useChatViewModel from "../viewmodels/ChatViewModel";
import "../styles/ChatView.css";

const ChatView = () => {
  const { messages, sendMessage } = useChatViewModel();
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    sendMessage(input).finally(() => setIsGenerating(false)); // Ensure loader hides after response
    setInput("");
  };

  // Trigger send on Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isGenerating) handleSend();
  };

  // Handle keyboard open/close resizing
  useEffect(() => {
    const handleResize = () => scrollToBottom();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Format response content
  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold **text**
      .replace(/__(.*?)__/g, "<em>$1</em>") // Italics __text__
      .replace(/\n/g, "<br>"); // New lines
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">Welcome to Chirabyte ChatBot</h1>
      <h2 className="chat-subtitle">Your AI Assistant</h2>
      <div className="chat-messages">
        {messages.length === 0 && !isGenerating ? (
          <div className="chat-subtitle">
            <p>👋 Hi there! I’m your AI assistant. Type a message to start chatting!</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <div
                className={`message-text ${msg.sender === "bot" && msg.text.startsWith("import") ? "code-view" : ""}`}
                dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
              ></div>
            </div>
          ))
        )}
        {isGenerating && (
          <div className="chat-message bot generating">
            <div className="message-text">🔄 Generating response...</div>
            <div className="loader"></div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="chat-input"
          disabled={isGenerating}
        />
        <button onClick={handleSend} className="chat-send-btn" disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatView;