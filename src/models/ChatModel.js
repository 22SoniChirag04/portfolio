import axios from "axios";

// Load Gemini API key from environment variables
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
console.log("Gemini API Key:", API_KEY); // ✅ Debugging log

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const ChatModel = {
  sendMessage: async (userInput) => {
    try {
      // ✅ Correct payload structure for Gemini API
      const response = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: userInput }],
            },
          ],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // ✅ Handle the response properly
      const output = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      return output || "No response from Gemini.";
    } catch (error) {
      console.error("API Error:", error);

      // ✅ Improved error handling
      if (error.response) {
        const { status, data } = error.response;
        if (status === 429) return "Too many requests! Slow down a bit. 🚦";
        if (status === 401) return "Invalid API key. 🔑";
        return `Error ${status}: ${data.error?.message || "Unknown error"}`;
      }

      return "Oops! Something went wrong.";
    }
  },
};

export default ChatModel;
