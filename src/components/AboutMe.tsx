import React from 'react';
import PhotoCard from './PhotoCard.tsx';

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#dbccc3] p-5 pb-5">
      <PhotoCard
        src="/static/images/Cristina.jpg"
        label="PRICING"
        autoHeight={true}
      />
      <div className="lg:pl-20">
        <h1 className="font-montez text-5xl">I am Cristina</h1>
        <p className="text-lg text-center max-w-lg font-inter">
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
