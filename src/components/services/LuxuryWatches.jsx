import React from "react";
import { servicesData } from "../../data/services";

const LuxuryWatches = () => {
  const { title, highlightTitle, description } = servicesData.itemsWeAccept;

  return (
    <>
      <div className="py-5 sm:py-20 bg-black relative overflow-hidden">
        {/* Decorative blurred ellipse */}
        <div
          className="absolute w-1/4 h-50 rounded-full opacity-30 "
          style={{
            backgroundColor: "#A08122",
            top: "-25px",
            left: "28%",
            transform: "translateX(200px)",
            filter: "blur(80px)",
          }}
        ></div>

        <div className="bg-black py-14 flex flex-col gap-8">
          <h1 className="text-3xl sm:text-5xl md:text-[40px] text-center text-[#DBDBDB]! font-semibold font-playfair-display">
            {title}{" "}
            <span className="text-gradient-gold animate-fade-in">
              {highlightTitle}
            </span>
          </h1>
          <p className="text-base text-center max-w-120 mx-3 md:mx-auto sm:text-xl text-[#DBDBDB] font-pro-display">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default LuxuryWatches;
