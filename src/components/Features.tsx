// src/components/Features.tsx

import React from 'react';

export default function Features() {
  const features = [
    { title: 'Feature 1', imageAlt: 'Feature 1 image' },
    { title: 'Feature 2', imageAlt: 'Feature 2 image' },
    { title: 'Feature 3', imageAlt: 'Feature 3 image' },
  ];

  return (
    <section
      id="features"
      className="bg-white px-6 py-16 md:py-24 text-center"
    >
      <h2 className="text-3xl font-bold text-black mb-10">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-gray-500">[Image]</span>
            </div>
            <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
            {/* <p className="text-gray-600 text-sm">Brief description of {feature.title}.</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
