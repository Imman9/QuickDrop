import Image from "next/image";
import Link from "next/link";
import React from "react";

const Buy = () => {
  return (
    <section className=" py-24  px-4 sm:px-6 lg:px-8  ">
      <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/buy.jpg"
            alt="hey"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Your Micro-Store for <br />
            <span className="text-green-700">Digital Hustle</span>
          </h2>

          <p className="text-lg text-gray-700 mb-2">
            Share a link. Accept M-Pesa. Deliver instantly.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Perfect for Kenyan creators, tutors & hustlers.
          </p>
          <Link href={"/dashboard"}>
            <button className="bg-green-700 hover:cursor-pointer hover:bg-green-800 text-white px-8 py-4 rounded-full shadow-lg font-semibold transition">
              Start Selling For Free
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Buy;
