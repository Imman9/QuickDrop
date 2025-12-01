import React from "react";

const Features = () => {
  const features = [
    {
      iconBg: "bg-green-100",
      icon: "📱",
      title: "M-Pesa STK Push",
      desc: "Buyers tap 'Pay' → STK pops instantly. No screenshots, no hassle.",
    },
    {
      iconBg: "bg-orange-100",
      icon: "🔗",
      title: "Share Anywhere",
      desc: "Generate smart links for TikTok, WhatsApp, Instagram, Telegram.",
    },
    {
      iconBg: "bg-yellow-100",
      icon: "⚡",
      title: "Instant Unlock",
      desc: "Payment confirmed? File unlocks automatically—no delays.",
    },
    {
      iconBg: "bg-blue-100",
      icon: "📊",
      title: "Live Analytics",
      desc: "Track views, sales, revenue, and customer insights in real-time.",
    },
    {
      iconBg: "bg-teal-100",
      icon: "🛡️",
      title: "Secure Payments",
      desc: "Built on Safaricom's trusted M-Pesa infrastructure.",
    },
    {
      iconBg: "bg-pink-100",
      icon: "⏱️",
      title: "Set Up in Minutes",
      desc: "Upload, set a price, share your link — that's it.",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Everything You Need to Start Selling
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          From payment to delivery, QuickDrop handles the heavy lifting so you
          can focus on creating.
        </p>

        {/* Icon List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
          {features.map((f, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div
                className={`w-12 h-12 ${f.iconBg} flex items-center justify-center rounded-xl text-2xl`}
              >
                {f.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-gray-600 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
