// src/components/HeroSection.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-white px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Left: Text content */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-black">
          This product is great!
        </h1>
        <p className="text-gray-600 text-lg">
          Discover how it can change your workflow, boost productivity, and simplify everything.
        </p>
        <Link href="/signup">
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
            Sign Up Today
          </button>
        </Link>
      </div>

      {/* Right: Image & Animation Placeholder */}
      <div className="flex flex-col items-center space-y-4">
        {/* Placeholder image */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner">
          <span className="text-gray-500">[Image Placeholder]</span>
        </div>

        {/* Placeholder for animation */}
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center border border-dashed border-gray-400 rounded-md">
          <span className="text-gray-400">[Animation Placeholder]</span>
        </div>
      </div>
    </section>
  );
}
