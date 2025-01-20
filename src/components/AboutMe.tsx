import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#dbccc3] p-5">
      <div className="">
        <img
          src="/static/images/Cristina.jpg"
          alt="About Me"
          className="w-60 h-82 lg:w-[500px] lg:h-auto rounded-lg"
        />
      </div>
      <div className="pt-5 lg:pt-0 max-w-2xl lg:ml-5">
        <p className="text-lg text-center">
          I am a photographer, a storyteller, an adventurer, and a lover of
          golden sunsets and ocean breezes. I’m a wife to my biggest supporter
          and a mom to two wonderful kids who keep me inspired every day. I’m
          happiest when I’m capturing moments that tell your unique
          story—whether it’s on the sandy shores of Tampa Bay, under the mossy
          oaks of a quiet park, or on a plane to your dream destination. When
          I’m not behind the camera, you’ll find me playing with my kids,
          enjoying the Florida sunshine, or editing in my favourite cozy spot.
          Based in Tampa, I love traveling to nearby beach towns and beyond to
          create memories you'll cherish forever.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
