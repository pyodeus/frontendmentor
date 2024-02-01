import React from 'react';

import BgDesktop from '../images/bg-curvy-desktop.svg';
import BgMobile from '../images/bg-curvy-mobile.svg';

export default function BgMain() {
  return (
    <div className="">
      <picture className="absolute bg-clr-DarkBlueIntro w-full pt-[17.5rem] xl:pt-[53rem] z-[-1]">
        <source srcSet={BgDesktop} media="(min-width: 800px)" />
        <img className="w-full" src={BgMobile} alt="wave" />
      </picture>
    </div>
  );
}
