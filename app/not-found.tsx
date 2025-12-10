import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-slate-50">
      <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mb-6">
        <iconify-icon icon="lucide:alert-triangle" width="48" className="text-amber-500"></iconify-icon>
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
      <p className="text-lg text-slate-600 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
