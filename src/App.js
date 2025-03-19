import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import ChatView from "./views/ChatView";
import PromptView from "./views/PromptView";
 

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to home screen */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chirabyte" element={<ChatView />} />
        <Route path="/image-generator" element={<PromptView />} />

      </Routes>
    </div>
  );
}
