import React from 'react';
// import logo from './logo.svg';
import car1 from './imgs/car-1.jpg'
import car2 from './imgs/car-2.jpg'
import car3 from './imgs/car-3.jpg'
import car4 from './imgs/car-4.jpg'
import car5 from './imgs/car-5.jpg'
import ImageSlider from './components/ImageSlider';
import './index.css'

const IMAGES = [
  {url: car1, alt: 'Car 1 Desc'},
  { url: car2, alt: 'Car 2 Desc' },
  { url: car3, alt: 'Car 3 Desc' },
  { url: car4, alt: 'Car 4 Desc' }, 
  { url: car5, alt: 'Car 5 Desc' }
];

function App() {
  return (
    <div className='w-full mx-auto max-w-7xl' style={{aspectRatio: "10 / 6"}}>
      <ImageSlider imageUrls={IMAGES}/>
      <a href="/" className='text-4xl'>
      Skip Link
      </a>
    </div>
  );
}

export default App;
