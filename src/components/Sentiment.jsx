import React from "react";
import { SentimentCard } from "./SentimentCard";

const Sentiment = () => {
  return (
    <div className="bg-white px-3 my-12" id="Sentiments">
      <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Sentiment
      </div>
      <div className="mt-8 mr-7 text-base font-medium leading-7 text-zinc-700 max-md:mr-2.5 max-md:max-w-full ">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </div>
      <div className="flex bg-slate-50 p-3 flex-col lg:flex-row overflow-x-scroll">
        <SentimentCard />
        <SentimentCard color="#ECFFF8" />
        <SentimentCard />
      </div>

      <div className="flex flex-col pt-6">
        <div className="flex gap-1.5 pr-20 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5">
          <div>Analyst Estimates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5df1b26288b9b075358355c6de9bbdcfea14843aff5481756f9489aaf39fc4b?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
            className="shrink-0 w-5 aspect-square"
          />
        </div>
        <div className="mt-6 w-full max-md:max-w-full p-12">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center items-center self-stretch px-8 mx-auto font-medium text-emerald-500 whitespace-nowrap bg-emerald-50 h-[119px] rounded-[59.22px] w-[119px] max-md:px-5 max-md:mt-10">
                <div className="flex gap-0.5 justify-center py-1.5">
                  <div className="grow text-4xl">76</div>
                  <div className="grow my-auto text-base leading-6">%</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch my-auto font-medium text-gray-500 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-row">
                  <div className="grow text-base leading-6">Buy</div>
                  <div className="flex gap-5 justify-between px-5 py-2 max-md:flex-wrap">
                    <div className="flex flex-auto gap-2.5 text-sm leading-5 max-md:flex-wrap">
                      <div className="shrink-0 my-auto max-w-full h-2 bg-emerald-500 rounded-sm w-60" />
                      <div className="flex-auto">46%</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 py-2 pr-20 max-md:flex-wrap max-md:pr-5">
                  <div className="text-base leading-5">Hold</div>
                  <div className="flex gap-2.5 text-base leading-6">
                    <div className="shrink-0 my-auto max-w-full h-2 rounded-sm bg-neutral-300 w-10" />
                    <div>8%</div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between py-2 pr-20 max-md:flex-wrap max-md:pr-5">
                  <div className="text-base leading-5">Sell</div>
                  <div className="flex gap-2.5 text-base leading-6">
                    <div className="shrink-0 my-auto max-w-full h-2 bg-red-500 rounded-sm w-20" />
                    <div className="grow">16%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
