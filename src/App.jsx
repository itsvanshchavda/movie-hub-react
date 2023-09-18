import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';
import Cardlist from './components/Movielist/Cardlist';
import Bollywood from './components/Movielist/Bollywood';
import TvShow from './components/Movielist/TvShow';
import Webseries from './components/Movielist/Webseries';
import Hollywood from './components/Movielist/Hollywood';


const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Hero />
      <Routes>
        <Route path="/" element={<Cardlist />} />
        <Route path="/movies" element={<Bollywood title='Bollywood Movies' />} />
        {/* <Route path="/movies" element={<Hollywood title='Hollywood Movies' />} /> */}
        <Route path="/webseries" element={<Webseries />} />
      </Routes>
    </BrowserRouter>


  );
};

export default App;
