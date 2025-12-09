"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddProductModal from "./AddProductModal";

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = [
    {
      id: 1,
      title: "Study Notes - Computer Science",
      price: "KSh 150",
      sales: 12,
      views: 245,
      image: "/api/placeholder/400/300",
      active: true,
      category: "Education",
    },
    {
      id: 2,
      title: "Wallpaper Pack - Abstract",
      price: "KSh 50",
      sales: 45,
      views: 892,
      image: "/api/placeholder/400/300",
      active: true,
      category: "Design",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Products</h2>
          <p className="text-gray-500 mt-1">Manage and track your digital assets</p>
        </div>
        <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-gray-200 active:scale-95"
          >
            <Plus className="w-5 h-5" />
            New Product
          </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {["All Products", "Active", "Drafts", "Archived"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              tab === "All Products"
                ? "bg-gray-900 text-white shadow-md shadow-gray-200"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Add New Product - Card Variant */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="group relative flex flex-col items-center justify-center h-full min-h-[320px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl hover:border-green-500/50 hover:bg-green-50/50 transition-all cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Plus className="w-8 h-8 text-green-600" />
          </div>
          <p className="font-semibold text-gray-900">Create New Product</p>
          <p className="text-sm text-gray-500 mt-1">Upload files, add details</p>
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
               {/* Placeholder since we don't have real images yet */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 shadow-sm">
                  {product.category}
                </span>
              </div>
              
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 shadow-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900 line-clamp-1 group-hover:text-green-600 transition-colors">
                  {product.title}
                </h3>
                <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${product.active ? 'bg-green-500' : 'bg-gray-300'}`} />
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Sales</p>
                  <p className="text-sm font-semibold text-gray-900">{product.sales}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Views</p>
                  <p className="text-sm font-semibold text-gray-900">{product.views}</p>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 group/btn">
                  Copy Link
                </button>
                <button className="p-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m.684 2.684C9.866 14.938 9 16 9 16c0 .482.866 1.938 2 2.684m-2-5.368C9.134 12.482 9 11.938 9 11.5c0-.482.134-.938.366-1.342M12 7v10m-3.5 0h7"/>
                   </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <AddProductModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ProductsSection;
