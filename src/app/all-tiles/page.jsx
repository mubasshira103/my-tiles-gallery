import TilesCard from '@/component/TilesCard';
import React from 'react';

const AllTilesPage = async () => {
  const res = await fetch('https://my-tiles-gallery-five.vercel.app/data.json');
  const data = await res.json();

  return (
    <div className="max-w-11/12 mx-auto">
      <h1 className="text-2xl text-black text-center m-10 font-bold ">All Photos</h1>
      {/* <div className="flex justify-center mb-8 md:mb-12">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search tiles by title..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full pl-12 pr-4 h-11 md:h-12 border-teal-500/40 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 rounded-xl text-sm md:text-base transition-all"
          />
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg md:text-xl" />
        </div>
      </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-3">
        {data.map((tiles) => (
          <TilesCard key={tiles.id} tiles={tiles}></TilesCard>
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;
