// src/components/CTA.tsx

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-black mb-4">
        Join up today
      </h2>
      <p className="text-gray-700 mb-6">
        Get started with our product in just a few clicks.
      </p>
      <Link href="/signup">
        <button className="bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-900 transition">
          Sign Up
        </button>
      </Link>
    </section>
  );
}
