import React from 'react';
import PhotoCard from './PhotoCard.tsx';

const GettingReady: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#dbccc3] items-center p-5">
      <div className="">
        <PhotoCard
          src="/static/images/Luna_Lucas.jpg"
          label="GETTING_READY"
          autoHeight={true}
        />
      </div>
      <div className="flex flex-col flex-grow text-center justify-center items-center text-lg">
        <section>
          <h1 className="mt-5 font-montez text-5xl lg:mt-0">Getting Ready</h1>
          <p>
            Let’s make your photos amazing! Here are some simple tips to help
            you look and feel your best.
          </p>
        </section>
        <div className="flex flex-col justify-around w-full lg:flex-row mt-5">
          <section className="mt-5 flex flex-col items-center lg:mt-0">
            <h1 className="font-montez text-5xl">What to do</h1>
            <h2 className="font-bold">Coordinate, Don't Match</h2>
            <p className="max-w-96">
              Pick colors that go well together instead of everyone wearing the
              same thing. Neutral tones, soft pastels, or earthy shades always
              look great!
            </p>
            <h2 className="mt-5 font-bold">Dress for the Location</h2>
            <p className="max-w-96">
              Think flowy dresses for the beach or cozy layers for a park shoot
              in cooler weather.
            </p>
            <h2 className="mt-5 font-bold">Comfort is Key</h2>
            <p className="max-w-96">
              Choose shoes and outfits you feel great in—you want to move,
              laugh, and have fun, not feel stiff or uncomfortable.
            </p>
          </section>
          <section className="mt-5 flex flex-col items-center lg:mt-0">
            <h1 className="font-montez text-5xl">What to skip</h1>
            <h2 className="font-bold">Busy Patterns and Logos</h2>
            <p className="max-w-96">
              SSimple outfits keep the focus on you and not on a big logo or
              distracting print.
            </p>
            <h2 className="mt-5 font-bold">Neon Colors</h2>
            <p className="max-w-96">
              Bright fluorescents can reflect on your skin—so it’s best to save
              those for another day.
            </p>
            <h2 className="mt-5 font-bold">Last-Minute Experiments</h2>
            <p className="max-w-96">
              Now’s not the time to try a brand-new hairstyle or bold makeup
              look—stick with what makes you feel fabulous
            </p>
          </section>
        </div>
        <section className="mt-10">
          <h1 className="text-2xl font-inter">
            Most Important Tip: Relax and have fun!
          </h1>
          <p>
            This session is all about capturing you. If you’re comfortable and
            enjoying yourself, your photos will be full of personality and joy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default GettingReady;
