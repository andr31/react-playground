import React from 'react';

const GettingReady: React.FC = () => {
  return (
    <div className="flex flex-row bg-[#dbccc3] p-5">
      <div className="">
        <img
          src="/static/images/Luna_Lucas.jpg"
          alt="About Me"
          className="w-60 h-82 lg:w-[500px] lg:h-auto rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow text-center justify-center items-center">
        <section>
          <h1>Getting Ready</h1>
          <p>Let's make ....</p>
        </section>
        <div className="flex flex-row">
          <section>
            <h1>What to do</h1>
            <h2>Coordinate, Don't Match</h2>
            <p>Pick colors..........</p>
            <h2>Dress for the Location</h2>
            <p>Think flowy dresses ....</p>
            <h2>Comfort is Key</h2>
            <p>Choose shoes...</p>
          </section>
          <section>
            <h1>What to ship</h1>
            <h2>Busy Patterns and Logos</h2>
            <p>Simple outfits keep the focus...</p>
            <h2>Neon Colors</h2>
            <p>Bright fluorescents can reflect on your skin-so...</p>
            <h2>Last-Minute Experiments</h2>
            <p>Now's notthe time...</p>
          </section>
        </div>
        <section>
          <h1>Most Important Tip: Relax and have fun!</h1>
          <p>This session is all about capturing you.</p>
        </section>
      </div>
    </div>
  );
};

export default GettingReady;
