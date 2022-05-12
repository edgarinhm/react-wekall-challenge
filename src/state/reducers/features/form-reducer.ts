import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  formLoader,
  formStatus,
  formUpdateRecipe,
  formResetRecipe,
} from "../../actions/form-actions";
import { Recipe } from "../../../interfaces/recipe-interface";

export interface FormState {
  isLoading: boolean;
  message: string;
  recipe: Recipe;
}

const initialState: FormState = {
  isLoading: false,
  message: "",
  recipe: {
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    checked: false,
    rate: 0,
    author: "",
    preparation: "",
    ingredients: "",
    updated: "",
    created: "",
    notes: "",
  },
};

const handleFormStatusFulfilled = (
  state: FormState,
  { payload }: PayloadAction<string>
) => {
  state.message = payload;
};

const handleLoaderToggle = (state: FormState) => {
  state.isLoading = !state.isLoading;
};

const handleFormUpdateRecipe = (
  state: FormState,
  { payload }: PayloadAction<Recipe>
) => {
  state.recipe = { ...payload };
};

const handleFormResetRecipe = () => {
  return initialState;
};

export default createReducer(initialState, {
  [formStatus.type]: handleFormStatusFulfilled,
  [formLoader.type]: handleLoaderToggle,
  [formUpdateRecipe.type]: handleFormUpdateRecipe,
  [formResetRecipe.type]: handleFormResetRecipe,
});
