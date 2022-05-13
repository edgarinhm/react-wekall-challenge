import { useNavigate } from "react-router-dom";
import routesPathsContant from "../../../constants/routes-paths-constant";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { Recipe } from "../../../interfaces/recipe-interface";
import RecipeService from "../../../services/recipe-service";
import { formUpdateRecipe } from "../../../state/actions/form-actions";

const useRecipesList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    navigate(routesPathsContant.recipesAdd);
  };

  const handleEdit = (recipe: Recipe) => {
    dispatch(formUpdateRecipe(recipe));
    navigate(routesPathsContant.recipesAdd);
  };

  const handleDelete = (recipe: Recipe) => {
    RecipeService.deleteRecipe(recipe.id).then(() =>
      navigate(routesPathsContant.index)
    );
  };

  return {
    handleAdd,
    handleEdit,
    handleDelete,
  };
};

export default useRecipesList;
