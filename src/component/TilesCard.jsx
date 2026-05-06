import { Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({ tiles }) => {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 border border-base-200 flex flex-col justify-between select-none max-w-[2000px] sm:max-w-[250px] mx-auto rounded-2xl overflow-hidden">
      <div className="relative mx-auto w-42 sm:w-50 md:w-54 h-42 sm:h-50 md:h-54 overflow-hidden rounded-xl">
        <Image
          src={tiles.image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          alt={tiles.title}
          className="object-cover"
        />

        <Chip size="sm" className="absolute right-2 top-2 text-xs">
          {tiles.category}
        </Chip>
      </div>

      <div className="p-2 sm:p-3 flex flex-col gap-1">
        <h2 className="text-xs sm:text-sm font-bold text-gray-800 line-clamp-1 leading-tight">
          {tiles.title}
        </h2>

        <p className="text-[9px] sm:text-[11px] text-gray-500 line-clamp-1">{tiles.description}</p>

        {/* Footer: Price & Button */}
        <div className="flex justify-between items-center mt-1 pt-1 border-t border-gray-50">
          <span className="font-bold text-xs sm:text-sm text-blue-600">
            ${tiles.price.toFixed(2)}
          </span>

          <Link
            href={`/all-tiles/${tiles.id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white text-[9px] sm:text-[11px] font-medium py-1 px-2 rounded-lg transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TilesCard;
