"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    storeUrl: "",
    monthlyOrderVolume: "",
    salesChannels: [] as string[],
    productLink: "",
    dimensions: { length: "", width: "", height: "", weight: "" },
    destinations: [] as string[],
    startTimeline: "",
    contactName: "",
    email: "",
    notes: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckboxChange = (field: "salesChannels" | "destinations", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleDimensionChange = (key: keyof typeof formData.dimensions, value: string) => {
    // Allow only numbers and decimal points
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFormData((prev) => ({
        ...prev,
        dimensions: { ...prev.dimensions, [key]: value },
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Basic validation
    if (!formData.storeUrl || !formData.monthlyOrderVolume || !formData.productLink || 
        !formData.startTimeline || !formData.contactName || !formData.email) {
      setStatus({ type: "error", message: "Please fill in all required fields" });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        storeUrl: formData.storeUrl,
        monthlyOrderVolume: formData.monthlyOrderVolume,
        salesChannels: formData.salesChannels,
        productLink: formData.productLink,
        dimensions: {
          length: formData.dimensions.length ? parseFloat(formData.dimensions.length) : null,
          width: formData.dimensions.width ? parseFloat(formData.dimensions.width) : null,
          height: formData.dimensions.height ? parseFloat(formData.dimensions.height) : null,
          weight: formData.dimensions.weight ? parseFloat(formData.dimensions.weight) : null,
        },
        destinations: formData.destinations,
        startTimeline: formData.startTimeline,
        contactName: formData.contactName,
        email: formData.email,
        notes: formData.notes,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setStatus({ type: "success", message: "Form submitted successfully! We'll be in touch soon." });
      
      // Reset form
      setFormData({
        storeUrl: "",
        monthlyOrderVolume: "",
        salesChannels: [],
        productLink: "",
        dimensions: { length: "", width: "", height: "", weight: "" },
        destinations: [],
        startTimeline: "",
        contactName: "",
        email: "",
        notes: "",
      });
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6">
      {/* Status Message */}
      {status.type && (
        <div
          className={`p-4 rounded-md ${
            status.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Store URL */}
      <div>
        <label htmlFor="storeUrl" className="block text-sm font-medium text-gray-700 mb-1">
          Store URL <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          id="storeUrl"
          required
          value={formData.storeUrl}
          onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
          placeholder="https://mystore.myshopify.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {/* Monthly Order Volume */}
      <div>
        <label htmlFor="monthlyOrderVolume" className="block text-sm font-medium text-gray-700 mb-1">
          Monthly Order Volume <span className="text-red-500">*</span>
        </label>
        <select
          id="monthlyOrderVolume"
          required
          value={formData.monthlyOrderVolume}
          onChange={(e) => setFormData({ ...formData, monthlyOrderVolume: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">Select volume</option>
          <option value="<100">&lt;100</option>
          <option value="100–500">100–500</option>
          <option value="500–1000">500–1000</option>
          <option value="1000+">1000+</option>
        </select>
      </div>

      {/* Sales Channels */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Primary Sales Channels
        </label>
        <div className="space-y-2">
          {["Shopify", "Amazon", "Etsy", "TikTok Shop", "Other"].map((channel) => (
            <label key={channel} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.salesChannels.includes(channel)}
                onChange={() => handleCheckboxChange("salesChannels", channel)}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">{channel}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Product Link */}
      <div>
        <label htmlFor="productLink" className="block text-sm font-medium text-gray-700 mb-1">
          Product Link <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          id="productLink"
          required
          value={formData.productLink}
          onChange={(e) => setFormData({ ...formData, productLink: e.target.value })}
          placeholder="https://example.com/product"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {/* Product Dimensions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Dimensions (optional)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <input
            type="text"
            value={formData.dimensions.length}
            onChange={(e) => handleDimensionChange("length", e.target.value)}
            placeholder="Length (cm)"
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
          <input
            type="text"
            value={formData.dimensions.width}
            onChange={(e) => handleDimensionChange("width", e.target.value)}
            placeholder="Width (cm)"
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
          <input
            type="text"
            value={formData.dimensions.height}
            onChange={(e) => handleDimensionChange("height", e.target.value)}
            placeholder="Height (cm)"
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
          <input
            type="text"
            value={formData.dimensions.weight}
            onChange={(e) => handleDimensionChange("weight", e.target.value)}
            placeholder="Weight (kg)"
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Destinations */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Typical Destinations
        </label>
        <div className="space-y-2">
          {["US", "EU", "UK", "Worldwide"].map((dest) => (
            <label key={dest} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.destinations.includes(dest)}
                onChange={() => handleCheckboxChange("destinations", dest)}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">{dest}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Start Timeline */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Start Timeline <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            { value: "immediately", label: "Immediately" },
            { value: "in 1 month", label: "In 1 month" },
            { value: "just exploring", label: "Just exploring" },
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="startTimeline"
                required
                value={option.value}
                checked={formData.startTimeline === option.value}
                onChange={(e) => setFormData({ ...formData, startTimeline: e.target.value })}
                className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Contact Name */}
      <div>
        <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
          Contact Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contactName"
          required
          value={formData.contactName}
          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
          placeholder="Your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Any additional information..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}