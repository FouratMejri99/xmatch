"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    if (showSignup) setShowSignup(false);
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white font-sans fixed top-14 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-green-400">
            FootTunisia
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6 text-base font-medium">
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
            <Link href="/my-team" className="hover:text-green-400">
              My Team
            </Link>
            <Link href="/transfers" className="hover:text-green-400">
              Transfers
            </Link>
            <Link href="/stats" className="hover:text-green-400">
              Stats
            </Link>
          </div>

          {/* Auth & mobile menu button */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
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

            {/* Hamburger */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden focus:outline-none text-white"
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Collapsing auth section */}
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

      {/* Sliding Mobile Sidebar (under navbar) */}
      <div
        className={`fixed top-[5.5rem] left-0 w-64 h-[calc(100%-5.5rem)] bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-4 text-base font-medium px-6 py-8">
          <Link
            href="/"
            onClick={closeSidebar}
            className="hover:text-green-400"
          >
            Home
          </Link>
          <Link
            href="/my-team"
            onClick={closeSidebar}
            className="hover:text-green-400"
          >
            My Team
          </Link>
          <Link
            href="/transfers"
            onClick={closeSidebar}
            className="hover:text-green-400"
          >
            Transfers
          </Link>
          <Link
            href="/stats"
            onClick={closeSidebar}
            className="hover:text-green-400"
          >
            Stats
          </Link>
        </nav>
      </div>
    </>
  );
}
