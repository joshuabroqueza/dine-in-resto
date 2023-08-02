import { useState } from "react";

import heroHomeMobile from "./assets/homepage/hero-bg-mobile.jpg";
import heroHomeTablet from "./assets/homepage/hero-bg-tablet.jpg";
import heroHomeDesktop from "./assets/homepage/hero-bg-desktop.jpg";

import enjoyPlaceMobile from "./assets/homepage/enjoyable-place-mobile.jpg";
import enjoyPlaceTablet from "./assets/homepage/enjoyable-place-tablet.jpg";
import enjoyPlaceDesktop from "./assets/homepage/enjoyable-place-desktop.jpg";
import localFood from "./assets/homepage/locally-sourced-mobile.jpg";
import localFoodTablet from "./assets/homepage/locally-sourced-tablet.jpg";
import localFoodDesktop from "./assets/homepage/locally-sourced-desktop.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="flex flex-col">
        <div className="bg-hero-mobile opacity-90 h-56 bg-cover bg-no-repeat flex flex-col justify-center items-center"></div>
        <div className="flex flex-col h-[528px] items-center bg-black">
          <h1 className="text-4xl mt-8 font-bold font-league tracking-widest text-white">
            dine
          </h1>
          <p className="font-league text-center font-thin my-2 text-3xl text-white">
            Exquisite dining <br /> since 1989
          </p>
          <p className="font-league text-center font-thin my-4 px-5 text-white">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <button className="uppercase w-3/4 my-5 py-4 text-white font-league tracking-wider border flex items-center justify-center">
            book a table
          </button>
        </div>
      </div>

      {/* ENJOYABLE PLACE SECTION */}
      <div>
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
              className="shadow-md drop-shadow-md hidden lg:hidden md:flex"
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
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className="enjoy_child">
          <div className="flex justify-center items-center mt-10">
            <img
              src={localFood}
              alt="localFood"
              className="shadow-md drop-shadow-md"
            />
          </div>
          <div className="enjoy_container px-10">
            <div className="my-10 flex flex-row justify-center items-center">
              <div className="border border-red-200 w-2 h-2 rounded-full mx-2"></div>
              <div className="border border-red-200 w-1/6 h-0"></div>
            </div>
            <h1 className="font-league text-center font-extrabold my-2 px-10 text-3xl">
              The most locally sourced food
            </h1>
            <p className="mx-4 px-4 text-center my-5">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
