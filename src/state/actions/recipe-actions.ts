import { createAction } from "@reduxjs/toolkit";
import { Recipe } from "../../interfaces/recipe-interface";

export const allRecipes = createAction<Recipe[] | undefined>("recipes/all");
