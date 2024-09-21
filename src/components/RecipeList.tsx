
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: number;
  name: string;
  image: string;
  rating: number;
  cookTimeMinutes: number;
  mealType: string;
  reviewCount: number;
  cuisine: string;
}

const RecipesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  margin: 0 auto; /* Center the grid */
  max-width: 1200px; /* Set a maximum width for the entire section */
`;

interface RecipeListProps {
  showAll: boolean; // Receives showAll prop from parent
}

const RecipeList: React.FC<RecipeListProps> = ({ showAll }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <RecipesWrapper>
      {showAll
        ? recipes.map((recipe) => ( // Show all recipes when showAll is true
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))
        : recipes.slice(0, 6).map((recipe) => ( // Show only 6 recipes when showAll is false
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
    </RecipesWrapper>
  );
};

export default RecipeList;



