import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import {useTrend} from "../context/trend.jsx"


const TrendingCoins = () => {
  const [trend,setTrend] = useTrend();
  const header = `Authorization: Bearer ${import.meta.env.VITE_COIN_API_KEY}`;
  const getTrending = async () => {
    try {
      const { data } = await axios.get("https://api.coingecko.com/api/v3/search/trending", { headers: { header } });
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
  //get prod
  return (
    <section className="flex flex-col p-6 text-base font-medium bg-white rounded-lg max-w-[427px] mt-26">
      <header className="text-2xl font-semibold leading-7 text-slate-900">
        Trending Coins (24h)
      </header>
      {trend.slice(0, 3).map((coin, index) => (
        <CoinCard key={index} coin={coin} />
      ))}
    </section>
  );
};

const CoinCard = ({ coin }) => {
  return (
    <div className="flex gap-5 justify-between mt-6 w-full whitespace-nowrap">
      <div className="flex gap-1.5 my-auto leading-[150%] text-slate-900">
        <img
          loading="lazy"
          src={coin.item.thumb}
          alt={coin.altText}
          className="shrink-0 w-6 aspect-square"
        />
        <div className="grow">{coin.item.name}</div>
      </div>
      <div className="flex gap-2 justify-center px-2.5 py-1.5 text-center text-emerald-500 bg-emerald-50 rounded">
        <div>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</div>
      </div>
    </div>
  );
};

export default TrendingCoins;
