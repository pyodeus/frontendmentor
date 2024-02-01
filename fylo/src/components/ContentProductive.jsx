import React from 'react';
import ImageProductive from '../images/illustration-stay-productive.png';

const ref = React.createRef(null);

function ContentProductive() {
  return (
    <div ref={ref} className="translate-y-1/2 opacity-0 transition-[transform,opacity] grid xl:items-end gap-y-11 xl:grid-cols-2 max-w-[77rem] mx-auto">
      <div className="px-9 xl:px-0">
        <img src={ImageProductive} alt="illustration-stay-productive" className="mx-auto" />
      </div>
      <div className="text-clr-White px-[1.74rem] xl:ps-[3.55rem] xl:pe-0 xl:pb-[4.2rem] mx-auto max-w-[70ch]">
        <h2 className="text-[1.13rem] xl:text-[2.5rem] xl:max-w-[20ch] font-bold font-Raleway mb-3 xl:mb-[1.3rem] leading-8 xl:leading-[3.1rem]">Stay productive, wherever you are</h2>
        <p className="text-sm xl:text-base leading-[1.32rem] mb-4">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-sm xl:text-base leading-[1.32rem] mb-3 xl:mb-[1.1rem]">
          Securely share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required.
        </p>
        <a href="/" className="text-xs xl:text-base text-clr-Cyan hover:text-clr-White max-w-max flex items-center gap-[0.4rem] py-1 border-b-2 border-clr-Cyan hover:border-clr-White group">
          See how Fylo works
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="bg-clr-Cyan group-hover:bg-clr-White rounded-full">
            <defs>
              <circle id="b" cx="6" cy="6" r="6" />
              <filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a">
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                <feColorMatrix values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0" in="shadowBlurOuter1" />
              </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(2 2)">
                <use fill="#000" filter="url(#a)" />
                <use fill="#62E0D9" />
              </g>
              <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330" />
            </g>
          </svg>

        </a>
      </div>
    </div>
  );
}
export default ContentProductive;
export { ref };
