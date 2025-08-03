import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }), false, 'addRecipe'),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }), false, 'updateRecipe'),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }), false, 'deleteRecipe'),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const lowerTerm = searchTerm.trim().toLowerCase();

    if (!lowerTerm) {
      // If search term empty, show all recipes
      set({ filteredRecipes: recipes });
      return;
    }

    // Filtering by title, ingredients, or prepTime (if any)
    // Here assuming recipe.ingredients is an array of strings and prepTime is a number in minutes

    const filtered = recipes.filter((recipe) => {
      const inTitle = recipe.title.toLowerCase().includes(lowerTerm);

      const inIngredients = recipe.ingredients
        ? recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(lowerTerm)
          )
        : false;

      // Assuming prepTime is a number and the search term could be a number or string of number
      const requestedTime = Number(lowerTerm);
      const inPrepTime = !isNaN(requestedTime) && recipe.prepTime
        ? recipe.prepTime <= requestedTime
        : false;

      return inTitle || inIngredients || inPrepTime;
    });

    set({ filteredRecipes: filtered });
  },

  setRecipes: (recipes) => {
    set({ recipes, filteredRecipes: recipes });
  },
}));


