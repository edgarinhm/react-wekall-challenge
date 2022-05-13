import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routesPathsContant from "../../constants/routes-paths-constant";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import RecipeService from "../../services/recipe-service";
import { formStatus } from "../../state/actions/form-actions";
import {
  allRecipes,
  setUserRecipes,
  filterRecipes,
} from "../../state/actions/recipe-actions";

const useRecipes = () => {
  const { recipes, filteredRecipes } = useAppSelector((state) => state.recipe);
  const { user } = useAppSelector((state) => state.session);

  const recipesList = Object.values(filteredRecipes);

  const dispatch = useAppDispatch();
  const loadData = useCallback(async () => {
    await RecipeService.findAllRecipes()
      .then((data) => {
        if (data.length) {
          dispatch(allRecipes(data));
          const filterUserRecipes = RecipeService.filterRecipesByUserId(
            data,
            user.id
          );
          dispatch(setUserRecipes(filterUserRecipes));
          dispatch(filterRecipes(filterUserRecipes));
        } else {
          dispatch(formStatus("recipes not found"));
        }
      })
      .catch(() => {
        dispatch(formStatus("upps, the service is not aviable, try again"));
      });
  }, []);

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(routesPathsContant.recipesAdd);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);
  return { recipesList, handleAdd, recipes };
};

export default useRecipes;
