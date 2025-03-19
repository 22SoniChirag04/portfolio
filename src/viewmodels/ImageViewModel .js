import { useState } from "react";

export const useImageViewModel = () => {
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