import React from "react";

import enjoyPlaceMobile from "../assets/homepage/enjoyable-place-mobile.jpg";
import enjoyPlaceTablet from "../assets/homepage/enjoyable-place-tablet.jpg";
import enjoyPlaceDesktop from "../assets/homepage/enjoyable-place-desktop.jpg";
import localFood from "../assets/homepage/locally-sourced-mobile.jpg";
import localFoodTablet from "../assets/homepage/locally-sourced-tablet.jpg";
import localFoodDesktop from "../assets/homepage/locally-sourced-desktop.jpg";

const EnjoyablePlace = () => {
  return (
    <div className="enjoy_child">
      <div className="flex justify-center items-center -mt-24">
        <img
          src={enjoyPlaceMobile}
          alt="enjoy_place"
          className="shadow-md drop-shadow-md md:hidden"
        />

        <img
          src={enjoyPlaceTablet}
          alt="enjoy_place"
          className="shadow-md drop-shadow-md hidden md:flex lg:hidden"
        />

        <img
          src={enjoyPlaceDesktop}
          alt="enjoy_place"
          className="shadow-md drop-shadow-md hidden lg:flex"
        />
      </div>
      <div className="enjoy_container px-10">
        <div className="my-10 flex flex-row justify-center items-center">
          <div className="border border-red-200 w-2 h-2 rounded-full mx-2"></div>
          <div className="border border-red-200 w-1/6 h-0"></div>
        </div>
        <h1 className="font-league text-center font-bold my-2 px-10 text-3xl">
          Enjoyable place for all the family
        </h1>
        <p className="mx-4 px-4 text-center my-5">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
    </div>
  );
};

export default EnjoyablePlace;
