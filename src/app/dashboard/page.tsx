import { DollarSign, Eye, ShoppingCart, TrendingUp, Plus } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      label: "Total Revenue",
      value: "KSh 2,850",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      label: "Total Views",
      value: "1,137",
      change: "+23.1%",
      icon: Eye,
      color: "text-blue-600",
    },
    {
      label: "Total Sales",
      value: "57",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-purple-600",
    },
    {
      label: "Conversion Rate",
      value: "5%",
      change: "+2.4%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ];

  const products = [
    {
      title: "Study Notes - Computer Science",
      price: "KSh 150",
      sales: 12,
      views: 245,
      image: "/api/placeholder/400/300",
      active: true,
    },
    {
      title: "Wallpaper Pack - Abstract",
      price: "KSh 50",
      sales: 45,
      views: 892,
      image: "/api/placeholder/400/300",
      active: true,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-green-600">QuickDrop</h1>
              <p className="text-sm text-gray-500">Creator Dashboard</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 transition">
              <Plus className="w-5 h-5" />
              Upload Product
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Products Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Your Products
                </h2>
                <p className="text-sm text-gray-500">
                  Manage your digital products and track their performance
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200">
              {["All Products", "Active", "Drafts"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                    tab === "All Products"
                      ? "bg-white text-green-600 border-b-2 border-green-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
                >
                  <div className="relative">
                    <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48" />
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Active
                    </span>
                    <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>👁 {product.views}</span>
                      <span>💰 {product.sales} sales</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600 mb-4">
                      {product.price}
                    </p>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg text-sm transition flex items-center justify-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        Copy Link
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg text-sm transition flex items-center justify-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m.684 2.684C9.866 14.938 9 16 9 16c0 .482.866 1.938 2 2.684m-2-5.368C9.134 12.482 9 11.938 9 11.5c0-.482.134-.938.366-1.342M12 7v10m-3.5 0h7"
                          />
                        </svg>
                        Share on Social
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add New Product Card */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-10 hover:border-gray-400 transition cursor-pointer">
                <div className="bg-green-100 rounded-full p-4 mb-4">
                  <Plus className="w-8 h-8 text-green-600" />
                </div>
                <p className="font-medium text-gray-700">Add New Product</p>
                <p className="text-sm text-gray-500 mt-1">
                  Upload your digital product
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
