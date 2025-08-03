// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '700px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '20px' }}>
            Home
          </Link>
          <Link to="/add">Add Recipe</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Recipe Sharing App</h1>
                <RecipeList />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <h1>Add New Recipe</h1>
                <AddRecipeForm />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          
          {/* Optional: catch all for unknown routes */}
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

