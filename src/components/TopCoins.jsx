import React from "react";

const coinsData = [
  {
    name: "Ethereum (ETH)",
    percentage: "8.21%",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/593174f095164eaf1042defc00cf1b4d318803f6a2cf0be27328e6b3aa807ed2?apiKey=c41df0b048fb4bad873f2d9b07bfce38&",
    altText: "Ethereum Logo",
  },
  {
    name: "Bitcoin (BTC)",
    percentage: "5.26%",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f73171d18a059f9d723d01ef52cf552c80138977c91aa70ad373d32e0d5c0374?apiKey=c41df0b048fb4bad873f2d9b07bfce38&",
    altText: "Bitcoin Logo",
  },
  {
    name: "Polygon (MATIC)",
    percentage: "4.32%",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78c3d10a7e06ce8acdfdc284dccb1e5cc5524c48bb5ea3d61b22545846a1169f?apiKey=c41df0b048fb4bad873f2d9b07bfce38&",
    altText: "Polygon Logo",
  },
];

const TrendingCoins = () => {
  return (
    <section className="flex flex-col p-6 text-base font-medium bg-white rounded-lg max-w-[427px] mt-26">
      <header className="text-2xl font-semibold leading-7 text-slate-900">
        Trending Coins (24h)
      </header>
      {coinsData.map((coin, index) => (
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
          src={coin.imageSrc}
          alt={coin.altText}
          className="shrink-0 w-6 aspect-square"
        />
        <div className="grow">{coin.name}</div>
      </div>
      <div className="flex gap-2 justify-center px-2.5 py-1.5 text-center text-emerald-500 bg-emerald-50 rounded">
        <div>{coin.percentage}</div>
      </div>
    </div>
  );
};

export default TrendingCoins;
