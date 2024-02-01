import React from 'react';
import PropTypes from 'prop-types';

import ImageSatish from '../images/profile-1.jpg';
import ImageBruce from '../images/profile-2.jpg';
import ImageIva from '../images/profile-3.jpg';

const ref = React.createRef(null);

function Profile({
  image, header, p, roles,
}) {
  return (
    <div className="bg-clr-DarkBlueTestimo rounded-sm text-clr-White px-5 pt-6 pb-[1.2rem] xl:px-[1.65rem] xl:pt-[2.5rem] max-w-[25rem] shadow-[12px_8px_0px_0px] shadow-clr-DarkBlueIntro/50">
      <p className="text-[0.625rem] xl:text-[0.935rem] leading-[1.125rem] xl:leading-[1.3rem] mb-4 xl:mb-6">{p}</p>
      <section className="flex items-start gap-[0.5rem] font-medium">
        <img src={image} alt="" className="rounded-full w-6" />
        <div>
          <h3 className="text-[0.6rem] tracking-widest mb-[0.15rem]">{header}</h3>
          <p className="text-[0.49rem]">{roles}</p>
        </div>
      </section>
    </div>
  );
}
function Profiles() {
  return (
    <div ref={ref} className="translate-y-1/2 opacity-0 transition-[transform,opacity] py-[10.6rem] xl:py-[11.1rem] xl:mb-[2rem] px-12 flex flex-col xl:flex-row max-w-[78.5rem] items-center mx-auto gap-y-6 gap-x-10">
      <Profile
        image={ImageSatish}
        header="Satish Patel"
        p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        roles="Founder & CEO, Huddle"
      />
      <Profile
        image={ImageBruce}
        header="Bruce McKenzie"
        p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        roles="Founder & CEO, Huddle"
      />
      <Profile
        image={ImageIva}
        header="Iva Boyd"
        p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        roles="Founder & CEO, Huddle"
      />
    </div>
  );
}

export default Profiles;
export { ref };

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  roles: PropTypes.string.isRequired,
};
