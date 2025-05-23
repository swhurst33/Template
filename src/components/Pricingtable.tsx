// src/components/PricingTable.tsx

export default function PricingTable() {
  const tiers = [
    {
      name: 'Basic',
      price: '$9/mo',
      features: ['Feature A', 'Feature B', 'Feature C'],
    },
    {
      name: 'Pro',
      price: '$29/mo',
      features: ['Everything in Basic', 'Feature D', 'Feature E'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      features: ['Custom Features', 'Dedicated Support', 'SLAs'],
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`border rounded-lg p-6 shadow-sm ${
              tier.popular ? 'border-black' : 'border-gray-300'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
            <p className="text-2xl font-bold mb-4">{tier.price}</p>
            <ul className="mb-6 space-y-2">
              {tier.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  • {feature}
                </li>
              ))}
            </ul>
            <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-900 transition">
              Choose {tier.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
