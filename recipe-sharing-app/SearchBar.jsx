import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by name, ingredient, or max prep time..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        marginBottom: '20px',
        boxSizing: 'border-box',
      }}
    />
  );
};

export default SearchBar;
