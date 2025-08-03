import React from 'react';
import { useRecipeStore } from '../recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  const isFav = favorites.includes(recipeId);

  return (
    <button
      onClick={() => toggleFavorite(recipeId)}
      style={{
        color: isFav ? 'goldenrod' : '#888',
        fontWeight: 'bold',
        border: '1px solid #ccc',
        background: 'white',
        cursor: 'pointer',
        marginLeft: '8px',
      }}
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFav ? '★ Unfavorite' : '☆ Favorite'}
    </button>
  );
};

export default FavoriteButton;
