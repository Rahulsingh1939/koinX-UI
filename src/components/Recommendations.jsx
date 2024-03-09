import React from "react";
import { SentimentCard } from "./SentimentCard";
import SmChart from "./SmChart";

export const Recommendations = () => {
  return (
    <div className="bg-white p-2 z-0 w-full mt-96" id="Sentiments">
      <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        You May Like Also
      </div>

      <div className="flex bg-slate-50 p-3 flex-col lg:flex-row overflow-x-scroll">
        <SmChart chrt="BITSTAMP:BTCUSD"/>
        <SmChart chrt="BITSTAMP:BTCUSD"/>
        <SmChart chrt="BITSTAMP:BTCUSD"/>
        <SmChart chrt="BITSTAMP:BTCUSD"/>
      </div>
      <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
       Trending Coins
      </div>
      <div className="flex bg-slate-50 p-3 flex-col lg:flex-row overflow-x-scroll">
      <SmChart chrt="BITSTAMP:BTCUSD"/>
      <SmChart chrt="BITSTAMP:BTCUSD"/>
      <SmChart chrt="BITSTAMP:BTCUSD"/>
      <SmChart chrt="BITSTAMP:BTCUSD"/>
      <SmChart chrt="BITSTAMP:BTCUSD"/>
      </div>
    </div>
  );
};
