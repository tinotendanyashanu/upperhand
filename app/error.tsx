"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-slate-50">
      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <iconify-icon icon="lucide:alert-circle" width="48" className="text-red-500"></iconify-icon>
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
      <p className="text-lg text-slate-600 max-w-md mb-8">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
      >
        Try again
      </button>
    </div>
  );
}
