import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa'; // Importing the check icon for ingredients

interface RecipeDetailProps {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  rating: number;
  cookTimeMinutes: number;
  prepTimeMinutes: number;
  description: string;  
}

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding:   50px 20px 100px 20px;
  background-color: #ffffff;
  min-height: auto;
  align-items: center; /* Vertically center content */
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  margin-left: 90px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 560px; /* Maximum width of the content section */
  height: 100%; /* Ensuring the height is consistent */
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipeImage = styled.img`
  width: 300px; /* Smaller image size */
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Shadow under image */
`;

const RecipeTitle = styled.h2`
  font-size: 22px; /* Reduced font size */
  color: #333;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const IngredientList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const IngredientItem = styled.li`
  font-size: 14px; /* Smaller font for ingredients */
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  svg {
    color: #28a745;
    margin-right: 8px;
  }
`;

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeDetailProps | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <DetailWrapper>
      {/* Left Section */}
      <ContentWrapper>
        <RecipeTitle>{recipe.name}</RecipeTitle>
        <Description>
          {recipe.instructions}
        </Description>
        <SectionTitle>Ingredients</SectionTitle>
        <IngredientList>
          {recipe.ingredients.map((ingredient, idx) => (
            <IngredientItem key={idx}>
              <FaCheckCircle /> {ingredient}
            </IngredientItem>
          ))}
        </IngredientList>
      </ContentWrapper>

      <ImageWrapper>
        <RecipeImage src={recipe.image} alt={recipe.name} />
      </ImageWrapper>
    </DetailWrapper>
  );
};

export default RecipeDetail;
