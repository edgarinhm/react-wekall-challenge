import { RECIPES_URL } from "../constants/api-constant";
import { httpClient } from "../http-client";
import { Recipe } from "../interfaces/recipe-interface";

class RecipeService {
  static async findAllRecipes(): Promise<Recipe[]> {
    try {
      const { data } = await httpClient.get<Recipe[]>(`${RECIPES_URL}`);
      return data;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static sortRecipes(recipe: Recipe[], orientantion = "dsc"): Recipe[] {
    return recipe.sort((a, b) => {
      return orientantion == "dsc" ? b.rate - a.rate : a.rate - b.rate;
    });
  }

  static filterRecipesByUserId(recipes: Recipe[], id: string): Recipe[] {
    return recipes.filter((recipe) => {
      return recipe.author === id;
    });
  }

  static async updateRecipe(recipe: Recipe): Promise<Recipe> {
    try {
      const { data } = await httpClient.put<Recipe>(
        `${RECIPES_URL}/${recipe.id}`,
        recipe
      );
      return data;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async deleteRecipe(recipeId: string): Promise<boolean> {
    try {
      await httpClient.delete(`${RECIPES_URL}/${recipeId}`);
      return true;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async addRecipe(recipe: Recipe): Promise<Recipe> {
    try {
      const { data } = await httpClient.post<Recipe>(`${RECIPES_URL}`, recipe);
      return data;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default RecipeService;
