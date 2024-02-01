import React from 'react';

import ImageLogo from '../images/logo.svg';
import IconLocation from '../images/icon-location.svg';
import IconPhone from '../images/icon-phone.svg';
import IconEmail from '../images/icon-email.svg';

const ref = React.createRef(null);

function FooterUpper() {
  return (
    <div ref={ref} className="translate-y-1/2 opacity-0 transition-[transform,opacity] bg-clr-DarkBlueIntro mx-auto text-clr-White text-center py-[1.8rem] xl:pt-[3rem] xl:pb-[2.5rem] px-7 xl:px-[3.1rem] mb-20 xl:mb-[5.3rem] max-w-[54rem]">
      <h2 className="text-lg xl:text-[2rem] font-bold font-Raleway mb-[0.9rem] xl:mb-[1.6rem]">Get early access today</h2>
      <p className="text-sm xl:text-[0.865rem] leading-[1.31rem] mb-8 xl:mb-10 max-w-[80ch] mx-auto">
        It only takes a minute to sign up and our free starter tier is extremely generous.
        If you have any questions, our support team would be happy to help you.
      </p>
      <form className="grid gap-y-6 gap-x-7 xl:grid-cols-[1fr,12.45rem] xl:px-7">
        <input
          type="text"
          name="email"
          placeholder="email@example.com"
          className="py-4 px-7 xl:px-[2.4rem] text-clr-DarkBlueTestimo xl:py-[0rem] text-[0.63rem] xl:text-[0.75rem] rounded-full before:content-['hello'] before:block"
        />
        <button
          type="submit"
          className="py-[0.85rem] font-medium xl:pt-3 bg-gradient-to-r from-clr-Cyan to-clr-Blue hover:bg-none hover:bg-clr-Cyan text-[0.9rem] rounded-full text-clr-White"
        >
          Get Started For Free
        </button>
      </form>
    </div>
  );
}
function FooterLower() {
  return (
    <div className="px-7 xl:pe-0 xl:pb-24 mx-auto max-w-[80rem]">
      <div className="ml-3 mb-10 xl:mb-8">
        <img src={ImageLogo} alt="Fylo" className="xl:mx-0" />
      </div>
      <div className="flex flex-col xl:flex-row xl:items-start gap-x-[2.6rem] xg:items-start text-clr-White">
        <div className="mb-5 xl:mb-0">
          <div className="flex items-start gap-7 xl:ps-3 xl:pe-9">
            <img src={IconLocation} alt="location" className="mt-2" />
            <p className="max-w-[35ch] text-[1.005rem] font-Raleway">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="grid gap-5 mb-20">
          <span className="flex gap-5 xl:gap-7 text-sm xl:items-end">
            <div>
              <img src={IconPhone} alt="Phone" className="" />
            </div>
            <p>+1-543-123-4567</p>
          </span>
          <span className="flex gap-5 xl:gap-6 text-sm xl:items-end">
            <div>
              <img src={IconEmail} alt="Email" className="" />
            </div>
            <p>example@fylo.com</p>
          </span>
        </div>

        <div className="flex-1 xl:flex xl:pl-[2.1rem] xl:justify-center xl:gap-x-20">
          <div className="grid gap-[0.85rem] mb-12 xl:mb-0">
            <a href="/">About Us</a>
            <a href="/">Jobs</a>
            <a href="/">Press</a>
            <a href="/">Blog</a>
          </div>

          <div className="grid gap-[0.85rem] mb-12 xl:mb-0 xl:content-start">
            <a href="/">Contact Us</a>
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
          </div>
        </div>

        <div className="text-clr-White flex xl:p-0 justify-center gap-[0.8rem] pt-8 pb-10">
          <a href="/" aria-label="facebook" className="rounded-full border border-clr-White w-7 xl:w-8 aspect-square grid justify-center items-center">
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href="/" aria-label="twitter" className="rounded-full border border-clr-White w-7 xl:w-8 aspect-square grid justify-center items-center">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="/" aria-label="instagram" className="rounded-full border border-clr-White w-7 xl:w-8 aspect-square grid justify-center items-center">
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default function Footer() {
  return (
    <footer
      className="bg-clr-DarkBlueFooter mt-auto bg-gradient-to-b from-clr-DarkBlueMain from-[9.6rem] to-clr-DarkBlueFooter to-[9.6rem]"
    >
      <FooterUpper />
      <FooterLower />
    </footer>
  );
}
export { ref };
