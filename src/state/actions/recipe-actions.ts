import { createAction } from "@reduxjs/toolkit";
import { Recipe } from "../../interfaces/recipe-interface";

export const allRecipes = createAction<Recipe[] | undefined>("recipes/all");
export const filterRecipes = createAction<Recipe[] | undefined>(
  "recipes/filter"
);
export const setUserRecipes = createAction<Recipe[] | undefined>(
  "recipes/user"
);
