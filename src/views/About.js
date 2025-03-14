import React, { useState, useEffect } from "react";
import UserViewModel from "../viewmodels/UserViewModel";
import Navbar from "../components/Navbar";

export default function About() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const viewModel = new UserViewModel();
    setUser(viewModel.getUserInfo());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
              <Navbar />
        
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-lg mt-2">Name: {user.name}</p>
      <p className="text-lg">Email: {user.email}</p>
    </div>
  );
}
