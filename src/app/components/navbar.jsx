"use client";

import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiBell, FiMenu, FiSettings, FiX } from "react-icons/fi";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

// Language options
const languages = [
  { code: "en", label: "English", flag: "/flags/en.png" },
  { code: "fr", label: "Français", flag: "/flags/fr.webp" },
  { code: "ar", label: "العربية", flag: "/flags/tn.webp" },
];

// Language selector dropdown
function LanguageSelect({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(lang) {
    setLanguage(lang);
    setOpen(false);
  }

  return (
    <div className="relative w-36" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 bg-gray-700 text-white rounded cursor-pointer text-sm"
        type="button"
      >
        <img
          src={language.flag}
          alt={language.label}
          className="w-5 h-5 mr-2 rounded-sm"
        />
        <span className="truncate">{language.label}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <ul
        className={`absolute z-20 mt-1 w-full bg-gray-700 rounded shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {languages.map((lang) => (
          <li
            key={lang.code}
            onClick={() => handleSelect(lang)}
            className={`cursor-pointer px-3 py-2 flex items-center hover:bg-green-600 ${
              lang.code === language.code ? "bg-green-500 font-semibold" : ""
            }`}
          >
            <img
              src={lang.flag}
              alt={lang.label}
              className="w-5 h-5 mr-2 rounded-sm"
            />
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Settings dropdown component
function SettingsDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = [
    { label: "Account", onClick: () => alert("Account") },
    { label: "Settings", onClick: () => alert("Settings") },
    { label: "Support", onClick: () => alert("Support") },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <FiSettings
        className="text-xl hover:text-green-400 cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <ul className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg z-50">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-green-600 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Main Navbar component
export default function Navbar({ onTabChange }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (showLogin || showSignup) {
      const scrollHeight = contentRef.current?.scrollHeight || 0;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [showLogin, showSignup]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleSignupSuccess = () => {
    setIsLoggedIn(true);
    setShowSignup(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    if (showSignup) setShowSignup(false);
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeSidebar = () => setSidebarOpen(false);

  const tabs = ["Home", "My Team", "Transfers", "Stats"];

  return (
    <>
      <nav className="bg-gray-900 text-white font-sans fixed top-14 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => onTabChange("Home")}
            className="text-xl font-bold hover:text-green-400"
          >
            FootTunisia
          </button>

          <div className="hidden md:flex space-x-6 text-base font-medium items-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className="hover:text-green-400"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelect language={language} setLanguage={setLanguage} />
            {isLoggedIn ? (
              <>
                <FiBell className="text-xl hover:text-green-400 cursor-pointer" />
                <SettingsDropdown />
                <FaUserCircle className="text-2xl" />
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="hover:text-red-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <button onClick={toggleLogin} className="hover:text-green-400">
                {showLogin ? "Close" : "Login"}
              </button>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden focus:outline-none text-white"
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          className="transition-all duration-500 ease-in-out overflow-hidden bg-gray-800 border-t border-gray-700"
          style={{ height }}
        >
          <div ref={contentRef} className="max-w-sm mx-auto p-4">
            {showLogin && (
              <Login
                onLoginSuccess={handleLoginSuccess}
                onSwitchToSignup={openSignup}
              />
            )}
            {showSignup && (
              <Signup
                onSignupSuccess={handleSignupSuccess}
                onSwitchToLogin={openLogin}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile only) */}
      <div
        className={`absolute top-[5.5rem] left-0 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ minHeight: "calc(100vh - 5.5rem)" }}
      >
        <nav className="flex flex-col space-y-4 text-base font-medium px-6 py-8">
          <LanguageSelect language={language} setLanguage={setLanguage} />
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                onTabChange(tab);
                closeSidebar();
              }}
              className="text-left hover:text-green-400"
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
