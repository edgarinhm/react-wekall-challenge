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

  static sortRecipes(recipe: Recipe[]): Recipe[] {
    return recipe.sort((a, b) => {
      return a.rate - b.rate;
    });
  }
}

export default RecipeService;
