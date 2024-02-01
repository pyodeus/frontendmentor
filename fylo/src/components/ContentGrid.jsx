import React from 'react';
import PropTypes from 'prop-types';

import Image1 from '../images/icon-access-anywhere.svg';
import Image2 from '../images/icon-security.svg';
import Image3 from '../images/icon-collaboration.svg';
import Image4 from '../images/icon-any-file.svg';

const ref = React.createRef(null);

function GridContent({ image, header, p }) {
  return (
    <section className="text-clr-White">
      <div className="max-w-16 xl:max-w-none mx-auto mb-[1.85rem]">
        <img src={image} alt={header} className="mx-auto" />
      </div>
      <h2 className="text-lg font-bold font-Raleway mb-[0.45rem] xl:text-[1.25rem]">{header}</h2>
      <p className="text-[0.86rem] text-clr-White/80 font-medium">{p}</p>
    </section>
  );
}

function Grid() {
  return (
    <div ref={ref} className="translate-y-1/2 opacity-0 transition-[transform,opacity] duration-500 text-center px-9 grid xl:grid-cols-2 max-w-[60rem] mx-auto gap-[5.4rem] xl:gap-[6.9rem] mb-40 xl:mb-[7.5rem] xl:pt-7">
      <GridContent
        image={Image1}
        header="Access your files, anywhere"
        p="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <GridContent
        image={Image2}
        header="Security you can trust"
        p="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />
      <GridContent
        image={Image3}
        header="Real-time collaboration"
        p="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />
      <GridContent
        image={Image4}
        header="Store any type of file"
        p="Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </div>
  );
}

export default Grid;
export { ref };

GridContent.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};
