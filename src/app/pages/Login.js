"use client";

import { useState } from "react";

export default function Login({ onLoginSuccess, onSwitchToSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake auth success
    onLoginSuccess();
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Log In</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition-colors py-3 rounded text-white font-semibold"
        >
          Log In
        </button>
      </form>

      <p className="mt-6 text-center text-gray-300">
        You dont have an account?{" "}
        <button
          onClick={onSwitchToSignup}
          className="text-green-400 hover:underline font-semibold"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
