// src/components/Banner.tsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: top;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  transition: background-image 1s ease-in-out; /* Smooth transition */
`;

const BannerText = styled.div`
  margin-left: 160px;
  margin-top: 100px;
  
`;

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(''); // For the current banner image
  const [images, setImages] = useState<string[]>([]); // Store all recipe images
  const [currentIndex, setCurrentIndex] = useState(0); // Keep track of which image is being shown

  // Function to fetch recipe images from the API
  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        const recipeImages = data.recipes.map((recipe: { image: string }) => recipe.image);
        setImages(recipeImages);
        if (recipeImages.length > 0) {
          setCurrentImage(recipeImages[0]); // Set the first image as the default
        }
      });
  }, []);

  // Function to cycle through images every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length; // Cycle through the images
        setCurrentImage(images[newIndex]);
        return newIndex;
      });
    }, 15000); // 15000ms = 15 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [images]);

  return (
    <BannerWrapper bgImage={currentImage}>
      <BannerText>Food Diary</BannerText>
    </BannerWrapper>
  );
};

export default Banner;
