// src/components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left side: Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <span>Logo</span> {/* You can replace this with an <Image /> later */}
        </Link>
      </div>

      {/* Center: Navigation links */}
      <div className="hidden md:flex space-x-6">
        <a href="#hero" className="text-gray-700 hover:text-black">
          Hero
        </a>
        <a href="#features" className="text-gray-700 hover:text-black">
          Features
        </a>
        <a href="#cta" className="text-gray-700 hover:text-black">
          CTA
        </a>
      </div>

      {/* Right side: Signup button */}
      <div>
        <Link href="/signup">
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}
