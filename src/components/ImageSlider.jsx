// src/components/ImageSlider.jsx
import React, { useState } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/reset.css'; // Импорт стилей Ant Design
import styles from './ImageSlider.module.scss';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    // ...другие изображения
  ];

  const descriptions = [
    "Photo 1",
    "Photo 2",
    "Photo 3", // Убедитесь, что у вас есть описания для всех изображений
  ];

  const handleSlideChange = (current) => {
    setCurrentSlide(current);
  };

  return (
    <div className={styles.sliderSection}>
      <div className={styles.infoSection}>
        <div className={styles.description}>
          {descriptions[currentSlide]}
        </div>
        <div className={styles.mainImage}>
          <img src={images[currentSlide]} alt={`Main view of slide ${currentSlide + 1}`} />
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <Carousel afterChange={handleSlideChange} autoplay autoplaySpeed={8000}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSlider;
