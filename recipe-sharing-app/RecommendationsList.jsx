import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const recommendations = useRecipeStore((state) => state.recommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (!recommendations.length)
    return <p>No personalized recommendations yet—add some favorites!</p>;

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Recommended For You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #eee', marginBottom: '8px', paddingBottom: '8px' }}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3 style={{ display: 'inline-block', marginRight: '10px' }}>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
