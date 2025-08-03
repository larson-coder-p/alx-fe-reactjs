import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  // Use filteredRecipes to show filtered results if search/filter applied, else fallback to all recipes
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Initialize filteredRecipes on mount and whenever recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const displayRecipes = (filteredRecipes && filteredRecipes.length) ? filteredRecipes : recipes;

  if (displayRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            backgroundColor: '#fafafa',
          }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to={`/recipes/${recipe.id}`} style={{ flexGrow: 1, textDecoration: 'none', color: '#333' }}>
              {recipe.title}
            </Link>
            <FavoriteButton recipeId={recipe.id} />
          </h3>
          <p>
            {recipe.description.length > 100
              ? recipe.description.slice(0, 100) + '...'
              : recipe.description}
          </p>
          {typeof recipe.prepTime === 'number' && (
            <p>
              <strong>Prep Time:</strong> {recipe.prepTime} minutes
            </p>
          )}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


