import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Have questions or feedback? We'd love to hear from you. Reach out via the form below or email us at support@yourapp.com.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-2 rounded h-32" />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </Layout>
  );
}
