import Layout from '@/components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-gray-100 p-6 hidden md:block border-r">
          <nav className="space-y-4 text-gray-700 font-medium">
            <a href="/dashboard" className="block hover:text-black">Dashboard</a>
            <a href="/dashboard/analytics" className="block hover:text-black">Analytics</a>
            <a href="/dashboard/reports" className="block hover:text-black">Reports</a>
            <a href="/dashboard/settings" className="block hover:text-black">Settings</a>
            <a href="/dashboard/billing" className="block hover:text-black">Billing</a>
            <a href="/dashboard/help" className="block hover:text-black">Support</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6">Valuable Data Overload</h1>

          {/* Placeholder chart area */}
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner">
            <span className="text-gray-500">[ Chart Placeholder ]</span>
          </div>
        </main>
      </div>
    </Layout>
  );
}
