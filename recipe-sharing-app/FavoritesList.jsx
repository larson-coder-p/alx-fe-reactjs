import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const favorites = recipes.filter((recipe) => favoriteIds.includes(recipe.id));

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #eee', marginBottom: '8px', paddingBottom: '8px' }}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3 style={{ display: 'inline-block', marginRight: '10px' }}>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
