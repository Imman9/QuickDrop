import Link from "next/link";
import Buy from "./components/buy";
import Features from "./components/features";
import { Footer } from "./components/footer";
import HowItWorks from "./components/howItWorks";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-gray-900"
        style={{ backgroundImage: "url('/ttt.jpg')" }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative text-center max-w-3xl px-6 flex flex-col gap-3">
          <h1 className="text-7xl font-bold mb-4 leading-tight">
            Your Micro–Store for <br />
            <span className="text-green-700">Digital Hustle</span>
          </h1>

          <p className="text-xl mb-2">
            Share a link. Accept M-Pesa. Deliver instantly.
          </p>
          <p className="text-xl mb-8 font-bold">
            Perfect for Kenyan creators, tutors & hustlers.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <Link href={"/products"}>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold p-4 rounded-full shadow-lg hover:cursor-pointer">
                View Products
              </button>
            </Link>

            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-full shadow hover:cursor-pointer">
              View Demo Product
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <Features />

      {/* how it works */}
      <HowItWorks />
      <Buy />
      <Footer />
    </>
  );
}
