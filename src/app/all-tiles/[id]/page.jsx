import { Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('https://my-tiles-gallery-five.vercel.app/data.json');
  const data = await res.json();
  const tile = data.find((d) => d.id == id);

  if (!tile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <h2 className="text-xl font-bold">Tile not found!</h2>
        <Link href="/all-tiles" className="btn btn-sm btn-primary mt-3">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">


      {/* Main Compact Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-base-100 p-4 md:p-6 rounded-2xl shadow-lg border border-base-200">

        {/* Left Side: Image (Occupies 5/12 columns on desktop) */}
        <div className="md:col-span-5 relative w-full aspect-square overflow-hidden rounded-xl bg-gray-50 group">
          <Image
            src={tile.image || "/placeholder-image.jpg"}
            alt={tile.title || "Tile"}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Chip
            size="sm"
            color="success"
            variant="flat"
            className="absolute top-2 right-2 font-semibold text-[10px] uppercase px-1"
          >
            {tile.category}
          </Chip>
        </div>

        {/* Right Side: Content (Occupies 7/12 columns on desktop) */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start gap-2">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white leading-tight">
                {tile.title}
              </h1>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-[11px] font-bold text-blue-600 bg-teal-50 px-2 py-0.5 rounded-md uppercase">
                {tile.material}
              </span>
              <span className={`text-[10px] font-bold ${tile.inStock ? 'text-blue-500' : 'text-red-400'}`}>
                  {tile.inStock ? 'In Stock' : 'Unavailable'}
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm leading-snug line-clamp-3">
              {tile.description}
            </p>

            {/* Quick Specs - More Compact */}
            <div className="mt-5 grid grid-cols-2 gap-3 p-3 bg-base-200/50 rounded-lg text-xs">
              <div>
                <p className="text-gray-700 font-medium">Dimensions</p>
                <p className="font-semibold text-gray-500">{tile.dimensions}</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Material</p>
                <p className="font-semibold text-gray-500">{tile.material}</p>
              </div>
            </div>
          </div>

          {/* Pricing & Button Area */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-base-200">
            <div>
              <p className="text-[10px] text-gray-600 uppercase font-bold tracking-tighter">Price per unit</p>
              <p className="text-xl font-black text-blue-600">${Number(tile.price).toFixed(2)}</p>
            </div>

            <button
              disabled={!tile.inStock}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm text-white transition-all
                ${tile.inStock
                  ? "bg-blue-400 hover:bg-teal-700 shadow-md"
                  : "bg-gray-300 cursor-not-allowed"}
              `}
            >
              {tile.inStock ? "Add to Cart" : "Sold Out"}
            </button>
          </div>
        </div>
      </div>
       {/* Back Button - Small & Minimal */}
      <div className="my-6 flex items-center justify-center">
        <Link
          href="/all-tiles"
          className="text-sm font-medium text-blue-600 rounded-xl border-2 py-2 px-4 hover:bg-blue-400 transition-colors flex items-center gap-1"
        >
          ← Back to All Tiles
        </Link>
      </div>
    </div>
  );
};

export default TilesDetailsPage;
