import * as React from "react";

export function Tokenomics() {
  return (
    <div className="flex flex-col pt-7 pb-16 pl-6 bg-white rounded-lg max-md:pl-5" id="Tokenomics">
      <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Tokenomics
      </div>
      <div className="mt-8 text-xl font-semibold leading-9 text-stone-900 max-md:max-w-full">
        Initial Distribution
      </div>
      <div className="py-4 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54eb9c38e031f2d7a5b83923150b86159ad15ec33afdde69818bc6fa0ee42538?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
              className="shrink-0 max-w-full aspect-square w-[179px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch py-7 my-auto text-base text-neutral-800 max-md:mt-10">
              <div className="flex gap-2.5 whitespace-nowrap">
                <div className="shrink-0 my-auto w-3 h-3 bg-sky-500 rounded-md" />
                <div className="grow">Crowdsale investors: 80%</div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <div className="shrink-0 my-auto w-3 h-3 bg-amber-500 rounded-md" />
                <div className="flex-auto">Foundation: 20%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </div>
    </div>
  );
}


