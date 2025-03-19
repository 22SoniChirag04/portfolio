// src/components/ImageGenerator.js
import React, { useState } from "react";
import useImageViewModel from "../viewmodels/ImageViewModel";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const { imageSrc, loading, error, generateImage } = useImageViewModel();

  const handleGenerate = () => {
    if (prompt.trim() !== "") generateImage(prompt);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Gemini AI Image Generator</h1>
      <input
        type="text"
        placeholder="Enter your image prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: loading ? "#aaa" : "#4caf50",
          color: "#fff",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {imageSrc && (
        <div>
          <img
            src={imageSrc}
            alt="Generated"
            style={{ width: "400px", borderRadius: "10px", marginTop: "20px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
