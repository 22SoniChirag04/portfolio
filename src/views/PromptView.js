import React, { useState } from "react";
import "../styles/ImageGenerator.css"; // Separate CSS file

// Model: Handles the API call
const generateImage = async (prompt) => {
  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY ;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ["Text", "Image"] },
      }),
    });

    const data = await response.json();

    const base64Image = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Image) throw new Error("No image data received");

    return `data:image/png;base64,${base64Image}`;
  } catch (error) {
    console.error("Failed to generate image:", error);
    throw new Error("Failed to generate image");
  }
};

// ViewModel: Manages state and logic
const useImageViewModel = () => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateImage = async (prompt) => {
    setLoading(true);
    setError("");
    try {
      const image = await generateImage(prompt);
      setImageData(image);
    } catch (err) {
      setError(err.message || "Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  return { imageData, loading, error, generateImage: handleGenerateImage };
};

// View: Handles the UI
const PromptView = () => {
  const [prompt, setPrompt] = useState("");
  const { imageData, loading, error, generateImage } = useImageViewModel();

  const handleGenerate = () => {
    if (prompt.trim()) generateImage(prompt);
  };

  const handleDownload = () => {
    if (imageData) {
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "chirabyte-ai.png";
      link.click();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && prompt.trim()) {
      generateImage(prompt);
    }
  };
  
  return (
    <div className="container">
      <h1 className="title">Chirabyte Image Generator</h1>
      <input
        type="text"
        placeholder="Enter a prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        className="prompt-input"
      />
      <button onClick={handleGenerate} disabled={loading} className="generate-btn">
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {error && <p className="error-text">{error}</p>}

      <div className="image-container">
        {/* <h2 className="image-title">Generated Image:</h2> */}
        {loading ? (
          <div className="shimmer-placeholder" />
        ) : (
          imageData && (
            <>
              <img src={imageData} alt="Generated" className="generated-image" />
              <button onClick={handleDownload} className="download-btn">Download Image</button>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default PromptView;