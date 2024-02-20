import React from "react";
import { PiMusicNotesFill } from "react-icons/pi";

const App = () => {
  return (
    <div className="bg-[#dfe5f9] min-h-screen flex flex-col  items-center">
      <div className="relative">
        <img
          src="pattern-background-desktop.svg"
          className="object-cover"
          alt="background"
        />
      </div>

      {/* card */}
      <div className="w-[310px] h-[450px] rounded-xl bg-white overflow-hidden absolute top-40 shadow-xl">
        <header>
          <img
            src="illustration-hero.svg"
            className="object-cover"
            alt="image people"
          />
        </header>

        <div className="text-center p-6">
          <h1 className="font-bold text-lg">Order Summary</h1>
          <p className="mt-4 font-semibold text-xs text-[#7280a7]">
            You can now listen to millons of songs, autiobooks, and podscats on
            any device anywhere you like!
          </p>
        </div>

        <div className="flex justify-between items-center mx-auto rounded-md bg-[#f8faff] py-4 w-[220px] px-4">
          <div className="flex justify-center items-center gap-3">
            <span className="bg-[#e0e8ff] rounded-full p-2 text-[#7280a7]">
              <PiMusicNotesFill />
            </span>
            <div>
              <h1 className="text-xs font-bold ">Annual Plan</h1>
              <p className="text-xs font-semibold text-[#7280a7]">
                $59.99/year
              </p>
            </div>
          </div>

          <div>
            <p className="underline text-[#0000ff] font-bold text-xs">change</p>
          </div>
        </div>
        <div className="flex-col flex px-4 text-center pt-4">
          <button className="bg-[#3829e0] mx-auto font-bold shadow-2xl text-white text-[10px] py-2 rounded-md w-[220px]">
            Proceed to Payment
          </button>
          <button className="mt-3 mx-auto text-xs font-bold text-[#7280a7] text-[10px] w-[220px]">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
