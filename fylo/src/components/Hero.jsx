import React from 'react';
import ImageIntro from '../images/illustration-intro.png';

export default function First() {
  return (
    <div className="pt-24 mb-[8.2rem] xl:pt-[12.5rem] grid justify-center">
      <div className="px-9 mb-9">
        <img src={ImageIntro} alt="illustration-intro" className="mx-auto" />
      </div>
      <div className="text-center text-clr-White px-8">
        <h1 className="text-2xl xl:text-[2.5rem] max-w-[36ch] mx-auto font-bold font-Raleway leading-9 xl:leading-[3.75rem] mb-4 xl:mb-8">All your files in one secure location, accessible anywhere.</h1>
        <p className="text-[0.86rem] xl:text-[1.225rem] max-w-[54ch] mx-auto font-medium px-2 leading-[1.31rem] xl:leading-[1.88rem] mb-8">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with
          friends family, and co-workers.
        </p>
        <a href="/" className="bg-clr-Blue hover:bg-clr-Cyan px-20 xl:px-24 rounded-full py-[0.9rem] xl:py-4 inline-block font-Raleway font-bold text-sm xl:text-base">Get Started</a>
      </div>
    </div>
  );
}
