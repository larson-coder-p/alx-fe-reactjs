import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  // Initialize filteredRecipes on first render or whenever recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p>No recipes found matching your search.</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description.length > 100 ? recipe.description.slice(0, 100) + '...' : recipe.description}</p>
          {recipe.prepTime !== undefined && <p>Prep Time: {recipe.prepTime} minutes</p>}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

