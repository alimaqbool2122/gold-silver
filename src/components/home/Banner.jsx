import React from "react";
import { assets } from "../../constants/assets";
import { homeData } from "../../data/home";

const Banner = () => {
  return (
    <>
      <div
        className="relative flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.bannerImage})` }}
      >
        <div className="container">
          {/* Banner content */}
          <div className="text-center flex flex-col gap-3 sm:gap-6">
            <h1
              className="text-3xl sm:text-5xl md:text-[58px] text-[#DBDBDB] font-semibold max-w-154 mx-auto font-playfair-display animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {homeData.banner.title}
              <span
                className="text-gradient-gold mt-3 inline-block animate-fade-in"
                style={{ animationDelay: "0.6s", opacity: 0 }}
              >
                {homeData.banner.subTitle}
              </span>
            </h1>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              <p className="text-base sm:text-xl text-white opacity-70! max-w-154 mx-auto font-pro-display">
                {homeData.banner.description}
              </p>
            </div>
            {/* buttons group */}
            <div className="flex flex-wrap items-center justify-center gap-5">
              <button
                className="bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)]! w-70 rounded-[50px] h-14.5 text-black font-semibold! animate-slide-in-left transition-transform duration-300"
                style={{ animationDelay: "1s", opacity: 0 }}
              >
                Get Free Quote
              </button>
              <button
                className="bg-transparent text-gradient-gold w-70 rounded-[50px] h-14.5 border-2! border-[#C59F26]! text-black font-semibold! animate-slide-in-right transition-transform duration-300"
                style={{ animationDelay: "1.2s", opacity: 0 }}
              >
                Browse Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
