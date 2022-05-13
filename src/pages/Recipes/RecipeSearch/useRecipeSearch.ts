import { FormEvent, useState } from "react";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import { filterRecipes } from "../../../state/actions/recipe-actions";

const useRecipeSearch = () => {
  const { userRecipes, filteredRecipes } = useAppSelector(
    (state) => state.recipe
  );
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const localRecipes = Object.values(filteredRecipes);

    if (searchValue.length > 0) {
      const filteredLocalRecipes = localRecipes.filter((recipes) => {
        return (
          recipes.category.includes(searchValue) ||
          recipes.ingredients.includes(searchValue)
        );
      });
      dispatch(filterRecipes(filteredLocalRecipes));
    } else {
      dispatch(filterRecipes(userRecipes));
    }
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return { handleSearch, handleChange };
};

export default useRecipeSearch;
