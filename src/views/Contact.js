import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
              <Navbar />
        
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="text-lg mt-2">Email: example@gmail.com</p>
    </div>
  );
}
