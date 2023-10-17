
import React from 'react';
import Navigation from '../components/Navigation';
import AboutMe from '../components/AboutMe';
import ImageSlider from '../components/ImageSlider';

const HomePage = () => {
  return (
    <div>
      <div style={{ padding: '0 50px' }}>
        {/* <AboutMe /> */}
        <ImageSlider />
      </div>
    </div>
  );
};

export default HomePage;
