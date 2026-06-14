import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-[#475569] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-block bg-[#475569] text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
