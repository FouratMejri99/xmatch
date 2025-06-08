"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side: Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold hover:text-green-400">
              FootTunisia
            </Link>
            <p className="text-sm text-gray-400 mt-1">
              © {new Date().getFullYear()} FootTunisia. All rights reserved.
            </p>
          </div>

          {/* Right Side: Links */}
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-green-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400 text-sm">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-green-400 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
