import { useState } from "react";

import heroHomeMobile from "./assets/homepage/hero-bg-mobile.jpg";
import heroHomeTablet from "./assets/homepage/hero-bg-tablet.jpg";
import heroHomeDesktop from "./assets/homepage/hero-bg-desktop.jpg";

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
          <p className="font-league text-center font-thin my-2 text-2xl text-white">
            Exquisite dining <br /> since 1989
          </p>
          <p className="font-league text-center font-thin my-4 px-5 text-white">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <button className="uppercase my-5 py-3 px-6 text-white font-league tracking-wider border">
            book a table
          </button>
        </div>
      </div>

      <div className="">hello</div>
    </main>
  );
}

export default App;
