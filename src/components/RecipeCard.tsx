// src/components/RecipeCard.tsx

import React from 'react';
import styled from 'styled-components';

interface RecipeProps {
  recipe: {
    id: number;
    name: string;
    image: string;
    rating: number;
    cookTimeMinutes: number;
    mealType: string;
    reviewCount: number;
    cuisine: string;  // Include the cuisine field
  };
}

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 350px; /* Fixed width for the card */
  overflow: hidden;
`;

const RecipeImage = styled.div<{ bgImage: string }>`
  width: 350px;
  height: 241.72px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ImageText = styled.div`
  font-family: 'Montez', cursive; /* Apply Montez font */
  font-size: 50px;
  font-weight: 400;
  line-height: 65.41px;
  text-align: center;
  color: #F5F5F5; /* Text color */
  position: absolute;
  bottom: 10px; /* Positioned near the bottom of the image */
  left: 80px; /* Positioned on the left */
  opacity: 1; /* Ensure visibility */
  z-index: 2; /* Ensure text is above the image */
`;

const RecipeInfo = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  position: rletive;
  text-decoration: underline;
  text-decoration-color: white; /* White underline */
  color: black; /* Make the recipe name black */
  margin-bottom: 10px; /* Space between elements */
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  text-decoration: underline;
  text-decoration-color: white; /* White underline */
  margin-bottom: 10px;
`;

const ReviewsButton = styled.div`
  background-color: #6caf43;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
  text-decoration: underline;
  text-decoration-color: #6caf43; /* White underline */
  text-align: center;
  margin-bottom: 10px;
`;

const MealType = styled.div`
  margin-bottom: 10px;
  text-align: right;
  text-decoration: underline;
  text-decoration-color: white; /* White underline */
  color: black;
`;

const RatingStars = styled.div`
  font-size: 1.2rem;
  color: #ffa500; /* Orange color for stars */
  text-align: right;
  text-decoration: underline;
  text-decoration-color: white; /* White underline */
`;

const RecipeCard = ({ recipe }: RecipeProps) => {
  return (
    <CardWrapper>
      {/* Recipe Image with text */}
      <RecipeImage bgImage={recipe.image}>
        <ImageText>{recipe.cuisine}</ImageText> {/* Display cuisine on image */}
      </RecipeImage>

      {/* Recipe Information */}
      <RecipeInfo>
        {/* Left Section: Recipe Name and Cooking Time */}
        <InfoSection>
          <Title>{recipe.name}</Title>
          <TimeWrapper>
            <span role="img" aria-label="clock">⏰</span> {recipe.cookTimeMinutes} minutes
          </TimeWrapper>
        </InfoSection>

        {/* Right Section: Reviews, Meal Type, and Rating */}
        <InfoSection>
          <ReviewsButton>Reviews: {recipe.reviewCount}</ReviewsButton>
          <MealType>{recipe.mealType}</MealType>
          <RatingStars>
            {"★".repeat(recipe.rating)} {/* Display stars based on the rating */}
          </RatingStars>
        </InfoSection>
      </RecipeInfo>
    </CardWrapper>
  );
};

export default RecipeCard;



