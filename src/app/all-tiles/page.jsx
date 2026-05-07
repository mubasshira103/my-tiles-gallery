import TilesCard from '@/component/TilesCard';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const AllTilesPage = async ({ searchParams }) => {
  const params = await searchParams;
  const searchText = params?.search || '';

  const res = await fetch(
    'https://my-tiles-gallery-five.vercel.app/data.json',
    {
      cache: 'no-store',
    }
  );

  const data = await res.json();

  // Filter Tiles
  const filteredTiles = data.filter((tile) =>
    tile.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-11/12 mx-auto py-8">
      {/* Heading */}
      <h1 className="text-2xl text-black md:text-4xl text-center font-bold mb-10">
        All Tiles Gallery
      </h1>

      {/* Search Form */}
      <form
        method="GET"
        className="flex text-gray-900 justify-center items-center  mb-10"
      >
        <div className="relative w-full max-w-md">
          <input
            type="text"
            name="search"
            defaultValue={searchText}
            placeholder="Search tiles by title..."
            className="w-full pl-12 pr-4 h-12 border border-teal-500/40 rounded-xl outline-none"
          />

          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="h-12 px-6 bg-blue-500 hover:bg-blue-950 text-white font-semibold rounded-xl transition-all"
        >
          Search
        </button>
      </form>

      {/* Tiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tiles) => (
            <TilesCard key={tiles.id} tiles={tiles} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No Tiles Found
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTilesPage;
