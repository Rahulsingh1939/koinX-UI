import React from "react";
import trl from "../assets/trl.png";
import ViewChart from "./ViewChart";
import TrendingCoins from "./TopCoins";

const Hero = () => {
  return (
    <>
      <div className="mx-auto container grid grid-cols-6">
        {/* Main content */}
        <main className="col-span-5 md:col-span-4 p-10">
          <ViewChart chrt="BITSTAMP:BTCUSD" />
        </main>
        {/* Right sidebar */}
        <aside className="col-span-5 md:col-span-2 p-10">
          <img src={trl} alt="Img" />
          <TrendingCoins />
        </aside>
      </div>
    </>
  );
};

export default Hero;
