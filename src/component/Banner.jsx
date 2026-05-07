import React from 'react';
import Link from 'next/link';
import bannerImg from '../asses/tiles2.jpeg';

const Banner = () => {
  return (
    // bg-linear-to-br from-[#D4EDED] to-[#DFDCFD]
    <div className=" container mx-auto  px-4">
      <div
        className="hero min-h-[50vh] sm:min-h-[55vh] md:min-h-[80vh] rounded-2xl overflow-hidden relative shadow-xl"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className=" select-none"></div>

        <div className="hero-content text-neutral-content text-center relative z-10 w-full px-2 sm:px-4">
          <div  className="max-w-xl w-full mx-auto px-3 sm:px-6 py-5 md:py-8 backdrop-blur-[2px] rounded-xl border border-white/10">
            <h1 className="mb-4 text-2xl sm:text-3xl text-blue-900 md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight select-none">
              Welcome to <br />
              <span className="">Tiles Gallery</span>
            </h1>
            <p className="mb-5 text-xs sm:text-sm md:text-base text-black font-medium max-w-md mx-auto">
              Discover stylish and high-quality tiles for your home and office. We provide modern,
              durable, and elegant tile designs to enhance your space.
            </p>

            <Link href="/all-tiles">
              <button className="animate__animated animate__pulse animate__infinite animate_slower:3 btn btn-sm sm:btn-md h-auto min-h-[2.5rem] sm:min-h-[3rem] px-6 sm:px-8 text-white font-bold bg-blue-800 rounded-xl">
                View All Tiles
              </button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
