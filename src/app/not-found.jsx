import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#2b1e16] opacity-20">404</h1>
        <h2 className="text-3xl font-bold text-[#2b1e16] -mt-6">Page Not Found</h2>
        <p className="text-gray-500 mt-3 max-w-sm mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <div className="flex gap-3">
        <Link href="/">
          <button className="btn bg-[#2b1e16] text-white rounded-full">
            Go Home
          </button>
        </Link>
        <Link href="/all-tiles">
          <button className="btn btn-outline border-[#2b1e16] text-[#2b1e16] rounded-full">
            Browse Tiles
          </button>
        </Link>
      </div>
    </div>
  );
}
