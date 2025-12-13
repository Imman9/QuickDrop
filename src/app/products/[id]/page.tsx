import ProductDetails from "./ProductDetails";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`/api/products/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) return <div>Product not found</div>;

  const product = await res.json();

  return <ProductDetails product={product} />;
}
