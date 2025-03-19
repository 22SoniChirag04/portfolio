// src/config/apiConfig.js
const API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/";

const API_ENDPOINTS = {
  GEMINI_CHAT: "models/gemini-2.0-flash:generateContent",
  GEMINI_IMAGE_GEN: "models/gemini-2.0-flash-exp-image-generation:generateContent",

};

export { API_BASE_URL, API_ENDPOINTS };
