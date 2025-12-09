"use client";
import React, { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { useSession } from "next-auth/react";

const AddProductModal = ({ onClose }: { onClose: () => void }) => {
  const { data: session } = useSession();
  const fileInput = useRef<HTMLInputElement | null>(null);

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");

  const handleThumbnail = (e: any) => {
    const file = e.target.files[0];
    setThumbnail(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };
  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  const addFeature = () => {
    if (newFeature.trim() === "") return;

    setFeatures([...features, newFeature]);
    setNewFeature("");
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  async function uploadToCloudinary(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw new Error("upload failed");

    return res.json();
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!session?.user?.id) {
      alert("You must be logged in to upload a product.");
      return;
    }
    if (!title || !price || !file) {
      alert("Please fill all required fields.");
      return;
    }
    try {
      //upload main file
      const fileUpload = await uploadToCloudinary(file);

      //upload thumbnail if provided
      let thumbnailUrl = null;
      if (thumbnail) {
        const thumbUpload = await uploadToCloudinary(thumbnail);
        thumbnailUrl = thumbUpload.secure_url;
      }
      //create a product in DB
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          price,
          thumbnail: thumbnailUrl,
          features,
          fileUrl: fileUpload.secure_url,
          sellerId: session.user.id,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        alert("Error: " + data.error);
        return;
      }

      alert("Product uploaded!");
      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Product Name*
            </label>
            <input
              type="text"
              placeholder="e.g., Study Notes - Mathematics"
              className="w-full mt-1 border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-green-600"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Description*
            </label>
            <textarea
              placeholder="Describe what buyers will get..."
              className="w-full mt-1 border-2 border-gray-200 rounded-xl p-3 h-28 focus:outline-none focus:border-green-600 resize-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Price (Ksh)*
            </label>
            <input
              type="number"
              placeholder="e.g., 150"
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mt-1 border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-green-600"
            />
            <p className="text-xs text-gray-500 mt-1">
              Minimum Ksh 10, Maximum Ksh 5000
            </p>
          </div>
          {/* thumbnail */}
          <div>
            <label className="font-medium">Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              className="w-full mt-2"
              onChange={handleThumbnail}
            />

            {thumbnailPreview && (
              <div className="mt-3">
                <img
                  src={thumbnailPreview}
                  alt="thumbnail preview"
                  className="w-48 h-48 object-cover rounded-lg shadow"
                />
              </div>
            )}
          </div>
          {/* features */}
          <div>
            <label className="font-medium">Features</label>

            <div className="flex gap-3 mt-2">
              <input
                type="text"
                className="flex-1 p-3 border rounded-lg"
                placeholder="e.g. Lifetime access"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
              />
              <button
                type="button"
                onClick={addFeature}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Add
              </button>
            </div>

            {/* Features List */}
            <ul className="mt-3 space-y-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex justify-between p-2 bg-gray-100 rounded-md"
                >
                  {feature}

                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Upload Area */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Upload File*
            </label>

            <div
              onClick={() => fileInput.current?.click()}
              className="w-full mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-green-500 transition"
            >
              <Upload className="w-10 h-10 text-green-600 mx-auto mb-3" />

              <p className="font-medium text-gray-700">
                Click to upload or drag and drop
              </p>

              <p className="text-xs text-gray-500 mt-1">
                PDF, PNG, JPG, MP3, ZIP (max 50MB)
              </p>
            </div>

            <input
              type="file"
              className="hidden"
              ref={fileInput}
              onChange={handleFile}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
