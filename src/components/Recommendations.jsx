import React from "react";
import { useTrend } from "../context/trend";
import SmChart  from "./SmChart";
import { useEffect } from "react";
import axios from "axios";

export const Recommendations = () => {
  const [trend, setTrend] = useTrend();
  const header = `Authorization: Bearer ${import.meta.env.VITE_COIN_API_KEY}`;
  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending",
        { headers: { header } }
      );
      if (data) {
        setTrend(data.coins);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <div className="bg-white p-2 z-0 w-full mt-96" id="Sentiments">
      <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Trending Coins
      </div>

      <div className="flex bg-slate-50 p-3 flex-col lg:flex-row overflow-x-scroll">
        {trend.map((coin, index) => (
          <div
            key={index}
            className="flex flex-col px-5 pt-5 pb-10 text-sm leading-5 rounded-xl border-0 border-neutral-800 shadow-slate-900 border-solid min-w-96"
          >
            <img src={`${coin.item.data.sparkline}`} alt="This is True" />
            <p className="text-center">{coin.item.name}</p>
          </div>
        ))}
      </div>
      <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
      You May Like Also 
      </div>
      <div className="flex bg-slate-50 p-3 flex-col lg:flex-row overflow-x-scroll">
        <SmChart chrt="BITSTAMP:BTCUSD" />
        <SmChart chrt="BITSTAMP:ETHUSD" />
        <SmChart chrt="CRYPTOCAP:USDT" />
      </div>
    </div>
  );
};
