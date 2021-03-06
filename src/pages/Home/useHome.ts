import { useCallback, useEffect } from "react";
import { TOP_RECIPES } from "../../constants/api-constant";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { formStatus } from "../../state/actions/form-actions";
import { allRecipes } from "../../state/actions/recipe-actions";
import RecipeService from "../../services/recipe-service";

const useHome = () => {
  const { recipes } = useAppSelector((state) => state.recipe);
  const topRateRecipes = RecipeService.sortRecipes(
    Object.values(recipes)
  ).slice(0, TOP_RECIPES);
  const dispatch = useAppDispatch();
  const loadData = useCallback(async () => {
    await RecipeService.findAllRecipes()
      .then((data) => {
        if (data.length) {
          dispatch(allRecipes(data));
        } else {
          dispatch(formStatus("recipes not found"));
        }
      })
      .catch(() => {
        dispatch(formStatus("upps, the service is not aviable, try again"));
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { topRateRecipes };
};

export default useHome;
