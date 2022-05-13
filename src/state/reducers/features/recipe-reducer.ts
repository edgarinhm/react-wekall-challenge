import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  allRecipes,
  filterRecipes,
  setUserRecipes,
} from "../../actions/recipe-actions";
import { Recipe } from "../../../interfaces/recipe-interface";

export interface RecipeState {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  userRecipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
  filteredRecipes: [],
  userRecipes: [],
};

const handleRecipesFulfilled = (
  state: RecipeState,
  { payload }: PayloadAction<Recipe[]>
) => {
  state.recipes = { ...payload };
};

const handleFilterRecipesFulfilled = (
  state: RecipeState,
  { payload }: PayloadAction<Recipe[]>
) => {
  state.filteredRecipes = { ...payload };
};

const handleUSerRecipesFulfilled = (
  state: RecipeState,
  { payload }: PayloadAction<Recipe[]>
) => {
  state.userRecipes = { ...payload };
};

export default createReducer(initialState, {
  [allRecipes.type]: handleRecipesFulfilled,
  [filterRecipes.type]: handleFilterRecipesFulfilled,
  [setUserRecipes.type]: handleUSerRecipesFulfilled,
});
