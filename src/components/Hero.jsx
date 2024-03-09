import React from "react";
import trl from "../assets/trl.png";
import ViewChart from "./ViewChart";
import TrendingCoins from "./TopCoins";
import { Options } from "./Options";
import { Tokenomics } from "./Tokenomics";
import { Team } from "./Team";
import { About } from "./About";
import Sentiment from "./Sentiment";
import { Recommendations } from "./Recommendations";

const Hero = () => {
  return (
    <>
      <div className="mx-auto container grid grid-cols-6">
        {/* Main content */}
        <main className="col-span-5 md:col-span-4 pb-6 pl-6 pr-6">
          <div className="mt-4 mb-3 h-12 p-3">
            {" "}
            <span className="text-gray-500 font-normal">
              Cryptocurrencies {" > "}{" "}
            </span>
            {`Bitcoin`}
          </div>
          <ViewChart chrt="BITSTAMP:BTCUSD" />
          <div className="mt-8 h-8">
            {" "}
            <Options />
          </div>
          <div className="mt-8">
            {" "}
            <Sentiment />
          </div>
          <div className="mt-8">
            {" "}
            <About />
          </div>
          <div className="mt-8">
            {" "}
            <Tokenomics />
          </div>

          <div className="mt-8">
            {" "}
            <Team />
          </div>
        </main>
        {/* Right sidebar */}
        <aside className="col-span-5 md:col-span-2 p-6 hidden lg:block">
          <img className="w-96 pb-6" src={trl} alt="Img" />
          <div className="w-96">
            <TrendingCoins />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Hero;
