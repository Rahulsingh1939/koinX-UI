import * as React from "react";

export function SentimentCard({ color }) {
  return (
    <div
      className="flex flex-col px-5 pt-5 pb-10 text-sm leading-5 rounded-xl border-0 border-indigo-100 shadow-slate-900 border-solid min-w-96"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="flex gap-2 justify-center py-px">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65af558a92e5fa5e48309d4cbe602361ca48bc66829d63eebc7196712ce4031?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
          className="shrink-0 self-start w-11 aspect-square"
        />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <div className="font-medium text-zinc-900">
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
            mattis enim tincidunt.
          </div>
          <div className="mt-2 text-slate-600">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.
          </div>
        </div>
      </div>
    </div>
  );
}
