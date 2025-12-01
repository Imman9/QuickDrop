"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Home,
  LayoutDashboard,
  ShoppingBag,
  Settings,
  Filter,
  Menu,
  X,
} from "lucide-react";

export default function ProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: ShoppingBag, label: "Products", href: "/products", active: true },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const categories = [
    "E-books",
    "Courses",
    "Templates",
    "Audio Packs",
    "Graphics",
    "Fonts",
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar - Collapsible */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-green-600">QuickDrop</h1>
                <p className="text-sm text-gray-500">Marketplace</p>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <nav className="mt-6 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                  item.active
                    ? "bg-green-50 text-green-600 font-medium shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Top Bar with Hamburger */}
          <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-700 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>

              <h1 className="text-xl font-bold text-gray-900 lg:hidden">
                Digital Products
              </h1>

              {/* Search - Hidden on very small screens */}
              <div className="hidden sm:block flex-1 max-w-md mx-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-12 pr-6 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            </div>
          </div>

          <main className="max-w-7xl mx-auto px-6 py-8">
            {/* Mobile Search (shown only on small screens) */}
            <div className="sm:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Header */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Digital Products
                </h1>
                <p className="text-gray-500 mt-1">
                  Discover premium digital downloads
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters - Hidden on mobile, collapsible on tablet */}
              <aside className="hidden lg:block">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Filters
                    </h3>
                    <Filter className="w-5 h-5 text-gray-500" />
                  </div>

                  <div className="mb-8">
                    <h4 className="font-medium text-gray-700 mb-4">Category</h4>
                    <div className="space-y-3">
                      {categories.map((cat) => (
                        <label
                          key={cat}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                          />
                          <span className="text-gray-600 text-sm">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-4">
                      Price Range
                    </h4>
                    <input
                      type="range"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>KSh 0</span>
                      <span>KSh 5,000</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="lg:col-span-4 lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Array(6)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="relative h-56 bg-gray-200">
                          <Image
                            src="/sample-product.jpg"
                            alt="Product"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                            Digital
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
                            Premium Template Pack {i + 1}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            Professional design assets
                          </p>

                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-green-600">
                              KSh 500
                            </span>
                            <span className="text-sm text-gray-500">
                              1.2k sales
                            </span>
                          </div>

                          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl transition shadow-sm hover:shadow-md">
                            See Details
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 right-6">
              <button className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition">
                <Filter className="w-6 h-6" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
