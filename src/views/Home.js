import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Navbar />
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg mt-2">This is the home page.</p>
    </div>
  );
}
