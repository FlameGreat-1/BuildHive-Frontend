// NotFoundPage.tsx
import {LucideBolt, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade/slide animation after mount
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        className={`text-center transform transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Animated Icon */}
        <LucideBolt className="w-16 h-16 text-gray-400 mb-4 mx-auto animate-spin-slow" />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          We're working to bring this page to you. Please check back later or
          return to the homepage.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>
      </div>

      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
          }
        `}
      </style>
    </div>
  );
}