import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const TileDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}`, {
    cache: "no-store",
  });
  const tiles = await res.json();
  const tile = tiles.find((t) => t.id == id);

  if (!tile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-[#2b1e16]">Tile not found</h1>
        <Link href="/all-tiles" className="btn bg-[#2b1e16] text-white rounded-full">
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Link
        href="/all-tiles"
        className="flex items-center gap-2 text-[#2b1e16] hover:underline mb-8 w-fit"
      >
        <FiArrowLeft />
        Back to All Tiles
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={tile.image}
            alt={tile.title}
            className="w-full rounded-2xl shadow-lg object-cover aspect-square"
          />
        </div>

        <div className="space-y-5">
          <div>
            <div className="badge badge-soft badge-primary mb-3">{tile.category}</div>
            <h1 className="text-4xl font-bold text-[#2b1e16]">{tile.title}</h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">{tile.description}</p>

          <div className="divider"></div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#fff6ef] rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">Material</p>
              <p className="font-semibold text-[#2b1e16]">{tile.material}</p>
            </div>
            <div className="bg-[#fff6ef] rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">Dimensions</p>
              <p className="font-semibold text-[#2b1e16]">{tile.dimensions}</p>
            </div>
            <div className="bg-[#fff6ef] rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">Price</p>
              <p className="font-semibold text-[#2b1e16]">
                {tile.currency} {tile.price}
              </p>
            </div>
            <div className="bg-[#fff6ef] rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">Availability</p>
              <div>
                {tile.inStock ? (
                  <div className="badge badge-outline badge-success">In Stock</div>
                ) : (
                  <div className="badge badge-outline badge-error">Out of Stock</div>
                )}
              </div>
            </div>
          </div>

          {tile.tags && (
            <div>
              <p className="text-sm text-gray-500 mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {tile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-soft badge-neutral"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            className={`btn w-full rounded-full ${
              tile.inStock
                ? "bg-[#2b1e16] text-white"
                : "btn-disabled"
            }`}
            disabled={!tile.inStock}
          >
            {tile.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;
