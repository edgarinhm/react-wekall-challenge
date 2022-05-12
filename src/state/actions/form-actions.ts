import { createAction } from "@reduxjs/toolkit";
import { Recipe } from "../../interfaces/recipe-interface";

export const formStatus = createAction<string | undefined>("form/status");
export const formLoader = createAction<boolean | undefined>("form/loader");
export const formUpdateRecipe = createAction<Recipe | undefined>("form/recipe");
export const formResetRecipe = createAction<undefined>("form/reset-recipe");
