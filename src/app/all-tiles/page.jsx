
import TilesCard from '@/component/TilesCard';
import React from 'react';


const AllTilesPage = async () => {
  const res = await fetch('https://my-tiles-gallery-five.vercel.app/data.json');
  const data =await res.json();

  return (
    <div>
      <h1 className="text-2xl text-black font-bold m-4">All Photos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-3">
        {
          data.map((tiles)=>(<TilesCard key={tiles.id} tiles={tiles}></TilesCard>))
        }
      </div>

    </div>
  );
};

export default AllTilesPage;
