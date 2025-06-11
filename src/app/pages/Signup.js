"use client";

import { useState } from "react";
import { supabase } from "../utils/supabaseClient"; // Adjust path as needed

export default function Signup({ onSignupSuccess, onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: username, // Supabase uses email as the identifier
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Check your email to confirm.");
      onSignupSuccess(); // optional redirect or state update
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 transition-colors py-3 rounded text-white font-semibold"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <p className="mt-6 text-center text-gray-300">
        Already have an account?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-green-400 hover:underline font-semibold"
        >
          Log In
        </button>
      </p>
    </div>
  );
}
