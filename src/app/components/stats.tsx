import React from "react";
import { DollarSign, Eye, ShoppingCart, TrendingUp, Plus } from "lucide-react";

const Stats = () => {
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

  return (
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
          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
