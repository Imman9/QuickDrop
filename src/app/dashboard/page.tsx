import Stats from "../components/stats";
import ProductsSection from "../components/productsSection";
import ProfileDropdown from "../components/ProfileDropdown";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-green-600">QuickDrop</h1>
              <p className="text-sm text-gray-500">Creator Dashboard</p>
            </div>
            <ProfileDropdown user={session.user || {}} />
          </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <Stats />

          {/* Products Section */}
          <ProductsSection />
        </main>
      </div>
    </>
  );
}
