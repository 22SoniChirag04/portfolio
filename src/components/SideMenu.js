import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../styles/SideMenu.css";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.div 
      className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}
      initial={{ width: "70px" }}
      animate={{ width: isOpen ? "250px" : "70px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Sidebar Header with Animated Icon */}
      <div className="sidebar-header" onClick={toggleSidebar}>
        <motion.div
          className="menu-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* Menu Items with Smooth Fade Animation */}
      <ul className="sidebar-menu">
        {[
          { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
          { name: "Profile", icon: <FaUser />, path: "/profile" },
          { name: "Settings", icon: <FaCog />, path: "/settings" },
          { name: "Logout", icon: <FaSignOutAlt />, path: "/login" },
        ].map((item, index) => (
          <motion.li
            key={index}
            onClick={() => navigate(item.path)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: isOpen ? index * 0.1 : 0 }}
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
