"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Home,
  LayoutDashboard,
  ShoppingBag,
  Settings,
  Filter,
  Menu,
  X,
  ChevronRight,
  Star,
} from "lucide-react";

interface ProductsProps {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string | null;
  fileUrl: string;
  features: string[];
  createdAt: string;

  seller: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  };

  purchases: any[];
}

export default function ProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: ShoppingBag, label: "Products", href: "/products", active: true },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const categories = [
    "All Assets",
    "E-books",
    "Courses",
    "Templates",
    "Audio Packs",
    "Graphics",
    "Fonts",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products", {
          method: "GET",
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch products");
          return;
        }
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) return <p>Loading products...</p>;

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="min-h-screen bg-gray-50/50 flex font-sans">
        {/* Sidebar - Collapsible */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-8 border-b border-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  QuickDrop
                </h1>
                <p className="text-xs font-medium text-gray-400 tracking-wide uppercase mt-1">
                  Marketplace
                </p>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <nav className="mt-8 px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || "#"}
                className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? "bg-green-50/80 text-green-700 shadow-sm ring-1 ring-green-100"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon
                  className={`w-5 h-5 transition-colors ${
                    item.active
                      ? "text-green-600"
                      : "text-gray-400 group-hover:text-gray-600"
                  }`}
                />
                <span>{item.label}</span>
                {item.active && (
                  <ChevronRight className="w-4 h-4 ml-auto text-green-600/50" />
                )}
              </Link>
            ))}
          </nav>

          {/* <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-50">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-4 text-white">
              <p className="font-semibold text-sm mb-1">Go Premium</p>
              <p className="text-xs text-green-100 opacity-90 mb-3">
                Unlock exclusive tools & analytics.
              </p>
              <button className="w-full bg-white text-green-700 text-xs font-bold py-2 rounded-lg hover:bg-green-50 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div> */}
        </aside>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0 min-w-0">
          {/* Top Bar with Hamburger */}
          <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-700 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>

              <h1 className="text-xl font-bold text-gray-900 lg:hidden">
                Discover
              </h1>

              {/* Search - Enhanced */}
              <div className="hidden sm:block flex-1 max-w-xl">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-green-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search for templates, courses, assets..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all duration-300 placeholder:text-gray-400 text-sm"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">
                      ⌘K
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-2 border-2 border-white"></div>
                  <ShoppingBag className="w-6 h-6" />
                </button>
                <div className="w-8 h-8 rounded-full bg-gray-200 border border-white shadow-sm overflow-hidden">
                  <img
                    src="/api/placeholder/100/100"
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
          </div>

          <main className="max-w-7xl mx-auto px-6 py-10">
            {/* Mobile Search */}
            <div className="sm:hidden mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
                  Discover Assets
                </h1>
                <p className="text-gray-500 text-lg">
                  Curated digital products for creators.
                </p>
              </div>

              <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide max-w-full">
                {categories.map((cat, i) => (
                  <button
                    key={cat}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      i === 0
                        ? "bg-gray-900 text-white shadow-lg shadow-gray-200 hover:bg-black"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Product Grid */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-3xl border border-gray-100 hover:border-green-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full"
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                        <img
                          src={product.thumbnail || "/placeholder.png"}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Dark gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Add/View button */}
                        <button className="absolute bottom-4 right-4 bg-white text-green-700 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-50 hover:scale-110">
                          <ShoppingBag className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Title */}
                        <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-green-700 transition-colors">
                          {product.title}
                        </h3>

                        {/* Description (Short) */}
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                          {product.description}
                        </p>

                        {/* Footer */}
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                          <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                              Price
                            </p>
                            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                              KSh {product.price}
                            </span>
                          </div>
                          <Link href={`/products/${product.id}`}>
                            <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg group-hover:bg-green-100 transition-colors">
                              View Details
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <button className="bg-white border border-gray-200 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                Load More Products
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
