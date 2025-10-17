"use client";

import { useState } from "react";

export function useEmailCopy() {
  const [showToast, setShowToast] = useState(false);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const ToastComponent = () => (
    <>
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-stone-700 text-stone-50 px-6 py-3 rounded-lg shadow-xl z-[9999] animate-fade-in border border-stone-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Email copied to clipboard</span>
          </div>
        </div>
      )}
    </>
  );

  return { copyEmail, ToastComponent };
}
