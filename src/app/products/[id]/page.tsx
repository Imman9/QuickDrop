import Image from "next/image";

interface ProductDetailsPageParams {
  params: {
    id: string;
  };
}

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageParams) {
  const { id } = params;

  // Fetch product by ID (replace later with real backend)
  const product = {
    title: "Complete React Study Notes 2024",
    description:
      "Comprehensive study notes covering React fundamentals, hooks, state management, and best practices. Perfect for students and developers preparing for interviews or building projects.",
    views: 245,
    rating: 4.8,
    reviews: 12,
    fileType: "PDF",
    fileSize: "2.5 MB",
    pages: 45,
    price: 150,
    creator: {
      name: "Tech Tutor KE",
      verified: true,
      avatar: "/api/placeholder/80/80",
    },
    image: "/api/placeholder/600/400",
    features: [
      "45 pages of detailed notes",
      "Code examples included",
      "Interview questions & answers",
      "Lifetime access",
      "Instant download",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <a
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          ← Back to Home
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20">
        {/* LEFT - Image */}
        <div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt="Product"
              width={900}
              height={600}
              className="object-cover"
            />
          </div>

          {/* Views + Rating */}
          <div className="flex items-center gap-6 mt-4 text-gray-600">
            <span>👁 {product.views} views</span>
            <span>
              ⭐ {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Creator */}
          <div className="mt-6 p-5 border rounded-xl flex items-center gap-4 shadow-sm">
            <Image
              src={product.creator.avatar}
              alt="Creator"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">
                {product.creator.name}
              </p>
              <p className="text-sm text-gray-500">Verified Creator</p>
            </div>
            {product.creator.verified && (
              <span className="ml-auto bg-gray-100 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                ✔ Verified
              </span>
            )}
          </div>
        </div>

        {/* RIGHT - Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 mt-6 text-sm">
            <span className="bg-gray-100 px-4 py-1 rounded-full">
              {product.fileType}
            </span>
            <span className="bg-gray-100 px-4 py-1 rounded-full">
              {product.fileSize}
            </span>
            <span className="bg-gray-100 px-4 py-1 rounded-full">
              {product.pages} pages
            </span>
          </div>

          {/* What's Included */}
          <div className="mt-10 border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">What's Included:</h2>

            <ul className="space-y-3 text-gray-700">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✔</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Box */}
          <div className="mt-10 border rounded-xl p-6 shadow-sm">
            <p className="text-4xl font-bold">Ksh {product.price}</p>
            <p className="text-gray-500">one-time</p>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-medium mt-5">
              ⚡ Pay with M-Pesa
            </button>

            <div className="mt-5 space-y-3 text-gray-600 text-sm">
              <p>🛡 Secure M-Pesa payment</p>
              <p>⚡ Instant delivery after payment</p>
              <p>📥 Lifetime access to your purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
