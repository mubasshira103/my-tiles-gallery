import React from 'react';
import TilesCard from './TilesCard';
import Link from 'next/link';

const PremiumTiles = async () => {
  const res = await fetch('https://my-tiles-gallery-five.vercel.app/data.json');
  const data = await res.json();
  const tilesData = data.slice(0, 4)
  return (
    <div className='max-w-11/12 mx-auto'>
      <h1 className="text-2xl text-black text-center m-10 font-bold my-8">Luxury Vein Collection</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-3">
        {
          tilesData.map((tiles)=>(<TilesCard key={tiles.id} tiles={tiles}></TilesCard>))
        }
      </div>
      <div className='p-9 m-9 text-center'>
        <Link href="/all-tiles">
        <button className='btn bg-blue-500 text-white'>Vew All</button>
        </Link>
      </div>

    </div>
  );
};

export default PremiumTiles;
