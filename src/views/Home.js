import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Welcome to Chirabyte AI Tools</h1>
      <p className="description">Empowering your creativity with smart AI solutions.</p>
      <div className="button-group">
        <button
          className="option-btn"
          onClick={() => navigate("/chirabyte")}
        >
          ✨ AI Ask Anything...
        </button>
        <button
          className="option-btn"
          onClick={() => navigate("/image-generator")}
        >
          🎨 AI Image Generator...
        </button>

        <footer className="footer">Made with ❤️ by Chirabyte Team</footer>

      </div>
      
    </div>
  );
};

export default Home;

