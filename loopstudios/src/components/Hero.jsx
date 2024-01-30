import React from 'react';
import imgHeroDesktop from '../images/desktop/image-hero.jpg';
import imgHeroMobile from '../images/mobile/image-hero.jpg';

export default function Hero() {
  return (
    <div className="relative grid items-center after:content-none">
      <picture>
        <source srcSet={imgHeroDesktop} media="(min-width: 765px)" />
        <img className="w-full min-h-[500px] max-h-[650px] object-cover" src={imgHeroMobile} alt="hero background" />
      </picture>
      <div className="absolute w-full max-w-[1160px] justify-self-center md:mt-20">
        <h1 className="max-w-[40.8rem] px-[1.42rem] md:px-[2.475rem] pt-6 md:pt-9 pb-4 md:pb-6 font-light leading-[2.4rem] font-josefin text-white border-white border-2 mx-[1.45rem] text-[2.5rem] md:text-[4.5rem] md:leading-[4.4rem]">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </div>
  );
}
