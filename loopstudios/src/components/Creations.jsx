import React from 'react';
import Images from './Creations_images';
/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Creations() {
  const obj = [
    { name: ['DEEP', 'EARTH'], src: 'DeepEarth' },
    { name: ['NIGHT', 'ARCADE'], src: 'NightArcade' },
    { name: ['SOCEER', 'TEAM VR'], src: 'SoccerTeam' },
    { name: ['THE', 'GRID'], src: 'Grid' },
    { name: ['FROM UP ', 'ABOVE VR'], src: 'Above' },
    { name: ['POCKET', 'BOREALIS'], src: 'Pocket' },
    { name: ['THE', 'CURIOSITY'], src: 'Curious' },
    { name: ['MAKE IT', 'FISHEYE'], src: 'Fisheye' },
  ];

  return (
    <div className="relative pt-2 px-6 lg:pe-4 pb-[3.9rem] max-w-[1160px] w-full mx-auto md:mb-[7.5rem]">
      <h2 className="text-center md:text-left text-[2rem] md:text-[3rem] font-light font-josefin mb-10 md:mb-[4.2rem] md:pt-[3.3rem]">OUR CREATIONS</h2>
      <div className="grid justify-center md:grid-cols-4 gap-x-6 gap-y-6 md:gap-y-8">
        {
          Object.values(obj).map(({ name, src }) => (
            <figure key={name} className="relative group hover:scale-105 md:hover:scale-110 transition-transform cursor-pointer">
              <picture>
                <source srcSet={Images.Desktop[src]} media="(min-width: 765px)" />
                <img src={Images.Mobile[src]} alt={name} />
              </picture>
              <figcaption className="absolute inset-0 text-white group-hover:text-amber-200 grid content-end p-5 md:py-8 md:px-10 text-2xl md:text-[2rem] font-josefin font-light leading-6 md:leading-8">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </figcaption>
            </figure>
          ))
        }
      </div>
      <div className="py-[2.1rem] grid justify-center md:absolute md:top-[2.6rem] md:right-[1.4rem]">
        <a href="#" className="bg-white px-[2.4rem] py-[0.65rem] pb-[0.5rem] border border-black tracking-[0.3rem] text-sm">SEE ALL</a>
      </div>
    </div>
  );
}
