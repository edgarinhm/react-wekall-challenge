import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { allRecipes } from "../../actions/recipe-actions";
import { Recipe } from "../../../interfaces/recipe-interface";

export interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

const handleRecipesFulfilled = (
  state: RecipeState,
  { payload }: PayloadAction<Recipe[]>
) => {
  state.recipes = { ...payload };
};

export default createReducer(initialState, {
  [allRecipes.type]: handleRecipesFulfilled,
});
