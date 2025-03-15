// src/viewmodels/ChatViewModel.js
import { useState } from "react";
import ChatModel from "../models/ChatModel";

const useChatViewModel = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse = await ChatModel.sendMessage(userInput);
    const botMessage = { text: botResponse, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
  };

  return { messages, sendMessage };
};

export default useChatViewModel;
