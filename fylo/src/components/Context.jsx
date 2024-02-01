// import React from 'react';
import { ref as ContentGrid } from './ContentGrid';
import { ref as Profiles } from './Profiles';
import { ref as ContentProductive } from './ContentProductive';
import { ref as FooterUpper } from './Footer';

window.addEventListener('load', () => {
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    if (
      rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      el.classList.remove('translate-y-1/2', 'opacity-0');
    }
  }
  function handleScroll() {
    if (
      ContentGrid.current && Profiles.current && ContentProductive.current && FooterUpper.current
    ) {
      isInViewport(ContentGrid.current);
      isInViewport(Profiles.current);
      isInViewport(ContentProductive.current);
      isInViewport(FooterUpper.current);
    }
  }

  window.addEventListener('scroll', handleScroll);
});
