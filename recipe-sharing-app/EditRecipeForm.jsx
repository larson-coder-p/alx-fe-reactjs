// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe, onCancel }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description.');
      return;
    }

    updateRecipe({
      ...recipe,
      title: title.trim(),
      description: description.trim(),
    });

    onCancel(); // exit editing mode
    navigate(`/recipes/${recipe.id}`); // optionally redirect or refresh details
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px', height: '100px' }}
        placeholder="Description"
      />
      <button type="submit" style={{ marginRight: '10px' }}>Save Changes</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
