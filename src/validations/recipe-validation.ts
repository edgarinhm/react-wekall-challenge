import { object, string } from "yup";

export const title = {
  title: string().required(),
};

export const description = {
  description: string().required(),
};

export const preparation = {
  preparation: string().required(),
};

export const ingredients = {
  ingredients: string().required(),
};

export const notes = {
  notes: string().required(),
};

export const category = {
  category: string().required(),
};

const recipeValidation = object().shape({
  ...title,
  ...description,
  ...preparation,
  ...ingredients,
  ...notes,
  ...category,
});

export default recipeValidation;
