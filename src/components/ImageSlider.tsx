import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from 'lucide-react';
import React, { useState } from 'react'
import '../App.css'
type ImageSliderProps = {
    imageUrls: {
        url: string,
        alt: string
    }[]
}

function ImageSlider({imageUrls}:ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);
    const moveSliderForward = () => {
        setImageIndex(index => {
            if(index  === imageUrls.length - 1) return 0;
            return index + 1;
        });
    }

    const moveSliderBack = () => {
        setImageIndex(index => {
            if(index === 0) return imageUrls.length - 1;
            return index - 1;
        });
    }
  return (
    <section aria-label="Image Slider" className="w-full h-full relative">
        <a href="#after-image-slider-controls" className='skip-link'>
            Skip Image Slider Conrols
        </a>
        <div className="w-full h-full flex overflow-hidden">
            {imageUrls.map((image, index) => (
                <img key={index} 
                     alt={image.alt} 
                     src={image.url}  
                     className="image-slider-img"
                     aria-hidden={index !== imageIndex}
                     style={{translate: `${-100 * imageIndex}%`}}/>
            ))}
        </div>
          {/* <img className="image-slider-img" src={imageUrls[imageIndex]} /> */}
          <button className='img-slider-btn' style={{ left: 0 }} onClick={() => moveSliderBack()} aria-label="View previous Image">
            <ArrowBigLeft aria-hidden/>
        </button>
          <button aria-label="View Next Image" className='img-slider-btn' style={{ right: 0 }} onClick={() => moveSliderForward()}>
            <ArrowBigRight aria-hidden />
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {imageUrls.map((_, index) => (
                <button aria-label="Select Image to View" 
                        key={index} 
                        className='img-slider-dot-btn' 
                        onClick={() => setImageIndex(index)}>
                    {index === imageIndex ?<CircleDot aria-hidden/> : <Circle aria-hidden/>}
                </button>
            ))}
        </div>
        <div id="after-image-slider-controls"></div>
    </section>
  )
}

export default ImageSlider