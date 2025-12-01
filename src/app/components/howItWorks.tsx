import React from "react";
import { Upload, Link2, DollarSign, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Your Product",
      description:
        "Notes, wallpapers, presets, cheat sheets, audio files - any digital item works.",
    },
    {
      icon: Link2,
      number: "02",
      title: "Get Your Link",
      description:
        "quickdrop.io/yourname/product - share it on any social platform.",
    },
    {
      icon: DollarSign,
      number: "03",
      title: "Buyer Pays via M-Pesa",
      description:
        "STK push pops up, they enter PIN, payment confirmed instantly.",
    },
    {
      icon: Download,
      number: "04",
      title: "Instant Delivery",
      description:
        "File unlocks automatically. No waiting, no manual work for you.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-2">How It Works</h2>
          <p className="text-2xl max-w-2xl mx-auto">
            Four simple steps from upload to cash in your pocket.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 translate-x-full w-20 h-1 bg-gray-200/60 group-hover:bg-green-600/60 transition-colors duration-300" />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-green-600/10 mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <step.icon className="w-12 h-12 text-green-600" />
                </div>

                <div className="text-sm font-bold text-orange-400 mb-1">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
