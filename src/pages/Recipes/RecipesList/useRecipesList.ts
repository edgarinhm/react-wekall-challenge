import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import routesPathsContant from "../../../constants/routes-paths-constant";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { Recipe } from "../../../interfaces/recipe-interface";
import RecipeService from "../../../services/recipe-service";
import { formUpdateRecipe } from "../../../state/actions/form-actions";

interface useRecipesListProps {
  recipes: Recipe[];
}

const useRecipesList = ({ recipes }: useRecipesListProps) => {
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

  const [filterValue, setFilterValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFilterValue(e.currentTarget.value);
  };

  const handleFilter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filterRecipes = recipes.filter((recipe) => {
      return (
        recipe.category.includes(filterValue) ||
        recipe.ingredients.includes(filterValue)
      );
    });
  };

  return {
    handleAdd,
    handleEdit,
    handleDelete,
    handleFilter,
    handleChange,
  };
};

export default useRecipesList;
