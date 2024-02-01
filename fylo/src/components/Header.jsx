import React from 'react';
import ImageLogo from '../images/logo.svg';

export default function Header() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (window.scrollY > 0) ref.current.classList.add('bg-clr-DarkBlueFooter');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        ref.current.classList.add('bg-clr-DarkBlueFooter');
        ref.current.classList.replace('xl:py-[4.55rem]', 'xl:py-[2rem]');
      } else {
        ref.current.classList.remove('bg-clr-DarkBlueFooter');
        ref.current.classList.replace('xl:py-[2rem]', 'xl:py-[4.55rem]');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={ref} className="fixed z-50 w-full px-5 py-6 xl:py-[4.55rem] transition-[colors,padding]">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto">
        <a href="/" aria-label="logo" className="max-w-20 xl:max-w-none">
          <img src={ImageLogo} alt="Fylo" />
        </a>
        <div className="text-clr-White/70 font-Raleway font-medium pt-[0.1rem] text-[0.76rem] px-1 xl:px-0 xl:text-base flex gap-6 xl:gap-[3.57rem]">
          <a className="hover:text-clr-White hover:underline" href="/">Features</a>
          <a className="hover:text-clr-White hover:underline" href="/">Team</a>
          <a className="hover:text-clr-White hover:underline" href="/">Sign In</a>
        </div>
      </div>
    </header>
  );
}
