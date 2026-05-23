"use client";
import TilesCard from "@/components/TilesCard";
import { Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTiles(data);
        setLoading(false);
      });
  }, []);

  const filtered = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-center text-5xl font-bold text-[#2b1e16] mb-4">
        All Tiles
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Discover our full collection of premium tiles
      </p>

      <div className="max-w-lg mx-auto mb-10">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl z-10" />
          <input
            type="text"
            placeholder="Search tiles by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pl-11 rounded-full border-[#2b1e16] focus:border-[#2b1e16]"
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-sm">
              <div className="skeleton h-52 w-full rounded-t-2xl"></div>
              <div className="card-body gap-3">
                <div className="skeleton h-5 w-3/4"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl">No tiles found for &quot;{search}&quot;</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((data) => (
            <TilesCard key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}
