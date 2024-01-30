import React from 'react';
// import Dev from '../dev/main';
import './App.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Content from './components/Content';
import Creations from './components/Creations';
import Footer from './components/Footer';

function App() {
  const fixedNav = React.useRef(null);
  const menuBtnOpen = React.useRef(null);
  const menuBtnClose = React.useRef(null);
  const menuList = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        fixedNav.current.classList.add('bg-clr-clrBlack');
        fixedNav.current.classList.remove('xl:py-16');
      } else {
        fixedNav.current.classList.remove('bg-clr-clrBlack');
        fixedNav.current.classList.add('xl:py-16');
      }
    };
    const handleMenuBtnOpen = () => {
      menuList.current.classList.remove('translate-x-full');
    };
    const handleMenuBtnClose = () => {
      menuList.current.classList.add('translate-x-full');
    };

    window.addEventListener('scroll', handleScroll);
    menuBtnOpen.current.addEventListener('click', handleMenuBtnOpen);
    menuBtnClose.current.addEventListener('click', handleMenuBtnClose);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuBtnOpen.current.removeEventListener('click', handleMenuBtnOpen);
      menuBtnClose.current.removeEventListener('click', handleMenuBtnClose);
    };
  }, []);

  return (
    <>
      <Nav
        header={fixedNav}
        menuBtnOpen={menuBtnOpen}
        menuBtnClose={menuBtnClose}
        menuList={menuList}
      />
      <Hero />
      <Content />
      <Creations />
      <Footer />
    </>
  );
}
export default App;

/*
- Mobile: 375px
- Desktop: 1440px

White: hsl(0, 0%, 100%)
Black: hsl(0, 0%, 0%)
Dark Gray: hsl(0, 0%, 55%)
Very Dark Gray: hsl(0, 0%, 41%)

## Typography
- Font size: 15px

### Fonts
- Family: [Alata](https://fonts.google.com/specimen/Alata)
- Weight: 400
- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weight: 300

## Icons
- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)
*/
