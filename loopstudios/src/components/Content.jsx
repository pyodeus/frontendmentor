import React from 'react';
import imgDesktop from '../images/desktop/image-interactive.jpg';
import imgMobile from '../images/mobile/image-interactive.jpg';

export default function Content() {
  return (
    <div className="relative text-center md:text-left w-full max-w-[1160px] mx-auto px-6 grid justify-center lg:justify-start gap-4 pt-24 pb-12 md:pb-28 md:pt-40">
      <picture>
        <source srcSet={imgDesktop} media="(min-width: 765px)" />
        <img src={imgMobile} alt="hero background" />
      </picture>
      <div className="px-3 py-8 lg:pb-12 lg:pt-24 lg:ps-24 lg:pe-5 lg:absolute bottom-16 right-0 max-w-[566px] bg-clr-clrWhite mx-auto">
        <h1 className="font-josefin font-light text-[2rem] md:text-[3rem] leading-8 md:leading-[3rem] mb-4 md:mb-6">THE LEADER IN INTERACTIVE VR</h1>
        <p className="text-[0.94rem] leading-[1.56rem]">
          Founded in 2011, Loopstudios has been producing world-class
          virtual reality projects for some of the best companies around the globe.
          Our award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}
