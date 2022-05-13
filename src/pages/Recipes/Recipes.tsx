import RecipesList from "./RecipesList";
import useRecipe from "./useRecipes";
import RecipeSearch from "./RecipeSearch";
import styles from "./recipes.module.scss";

const Recipes = () => {
  const { recipesList } = useRecipe();
  return (
    <article className={styles.recipes_wrap}>
      <h1>Recipes</h1>
      <RecipeSearch />
      <RecipesList recipes={recipesList} />
    </article>
  );
};

export default Recipes;
