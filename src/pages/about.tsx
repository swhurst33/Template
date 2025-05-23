import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          This application was built to help users make better decisions through simple tools and seamless design. Learn more about our mission, vision, and the team behind it.
        </p>
      </div>
    </Layout>
  );
}