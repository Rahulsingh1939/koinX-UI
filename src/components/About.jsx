import * as React from "react";

function InfoSection(props) {
  return (
    <section className="mt-4 text-lg font-bold leading-5 text-slate-900 max-md:max-w-full">
      {props.title}
      <p className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        {props.children}
      </p>
    </section>
  );
}

function Divider() {
  return (
    <hr className="shrink-0 mt-4 h-px border-b border-solid border-slate-300 border-opacity-60 max-md:max-w-full" />
  );
}

function CtaButton({ link, altText, text }) {
  return (
    <button className="flex flex-col justify-center px-6 py-0.5 mt-4 w-full text-sm font-semibold bg-white rounded-lg text-slate-900 max-md:px-5">
      <div className=" text-slate-700">{altText}</div>
      <div className="flex gap-1.5 pr-3">
        <div className="flex-auto">{text}</div>{" "}
        <img
          loading="lazy"
          src={link}
          alt={altText}
          className="shrink-0 my-auto w-5 aspect-square"
        />
      </div>
    </button>
  );
}

export function About() {
  return (
    <article className="flex flex-col px-6 pt-7 bg-white rounded-lg  max-md:px-5" id="Fundamentals">
      <header>
        <h1 className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
          About Bitcoin
        </h1>
      </header>
      <InfoSection title="What is Bitcoin?">
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </InfoSection>
      <Divider />
      <InfoSection title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
        <br />
        <br />
        Diam praes massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
        <br />
        <br />
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </InfoSection>
      <Divider />
      <section className="mt-4 text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Already Holding Bitcoin?
      </section>
      <section className="mt-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <CtaButton
            link="https://cdn.builder.io/api/v1/image/assets/TEMP/18ad943af93d314331ea1e484dc2d18e79fce04dcf87db757dc63de4c7b00ed8?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
            altText="Calculate your Profits"
            text="Check Now"
          />
          <CtaButton
            link="https://cdn.builder.io/api/v1/image/assets/TEMP/f1ca91669df8cc2923b39496d71bce7a74c533e26ec2d08de3dd9eaaee8431af?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
            altText="Calculate your tax liability"
            text="Check Now"
          />
        </div>
      </section>
      <Divider />
      <footer>
        <p className="mt-4 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </footer>
    </article>
  );
}
