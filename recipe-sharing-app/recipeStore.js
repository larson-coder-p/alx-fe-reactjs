import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();  // Make sure filterRecipes exists here!
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const lowerTerm = searchTerm.trim().toLowerCase();
    if (!lowerTerm) {
      set({ filteredRecipes: recipes });
      return;
    }
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(lowerTerm)
    );
    set({ filteredRecipes: filtered });
  },

  // Other store actions...
}));





