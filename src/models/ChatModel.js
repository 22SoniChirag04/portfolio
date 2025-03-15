// src/models/ChatModel.js
import { post } from "../services/apiService";
import { API_ENDPOINTS } from "../config/apiConfig";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const ChatModel = {
  sendMessage: async (userInput) => {
    const endpoint = `${API_ENDPOINTS.GEMINI_CHAT}?key=${API_KEY}`;
    const payload = {
      contents: [{ parts: [{ text: userInput }] }],
    };

    try {
      const response = await post(endpoint, payload);
      return response?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
    } catch (error) {
      return error.message;
    }
  },
};

export default ChatModel;
