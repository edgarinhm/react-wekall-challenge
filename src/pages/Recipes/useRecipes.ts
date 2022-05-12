import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routesPathsContant from "../../constants/routes-paths-constant";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import RecipeService from "../../services/recipe-service";
import { formStatus } from "../../state/actions/form-actions";
import { allRecipes } from "../../state/actions/recipe-actions";

const useRecipes = () => {
  const { recipes } = useAppSelector((state) => state.recipe);
  const { user } = useAppSelector((state) => state.session);
  const userRecipes = RecipeService.filterRecipesByUserId(
    Object.values(recipes),
    user.id
  );
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

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(routesPathsContant.recipesAdd);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);
  return { userRecipes, handleAdd };
};

export default useRecipes;
