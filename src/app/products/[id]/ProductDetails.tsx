"use client";

import Image from "next/image";

export default function ProductDetails({ product }: { product: any }) {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold">{product.title}</h1>

      <Image
        src={product.thumbnail || "/placeholder.png"}
        alt={product.title}
        width={800}
        height={500}
      />
    </div>
  );
}
