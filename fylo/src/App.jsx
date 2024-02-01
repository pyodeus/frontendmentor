import React from 'react';
// import Dev from '../dev/main';
import './App.css';

import Header from './components/Header';
import MainBG from './components/MainBG';
import Hero from './components/Hero';
import ContentGrid from './components/ContentGrid';
import ContentProductive from './components/ContentProductive';
import Profiles from './components/Profiles';
import Footer from './components/Footer';

import './components/Context';

function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <MainBG />
        <Hero />
        <ContentGrid />
        <ContentProductive />
        <Profiles />
      </main>
      <Footer />
    </>
  );
}

export default App;
