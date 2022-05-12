import Button from "../../../components/common/Button/Button";
import useRecipesList from "./useRecipesList";
import { Recipe } from "../../../interfaces/recipe-interface";
import styles from "./recipes-list.module.scss";
import Input from "../../../components/common/Input/Input";

interface RecipesListProps {
  recipes: Recipe[];
}
const RecipesList = ({ recipes }: RecipesListProps) => {
  const { handleAdd, handleEdit, handleDelete, handleFilter, handleChange } =
    useRecipesList({ recipes });
  return (
    <section>
      <div className={styles.recipe_filter}>
        <form onSubmit={handleFilter}>
          <Input name="filter" label="Filter" onChange={handleChange} />
          <Button type="submit"></Button>
        </form>
      </div>
      <Button
        className={styles.recipe_add}
        label="Add"
        onClick={handleAdd}
      ></Button>
      {recipes.map((recipe, index) => {
        return (
          <div key={index + recipe.id} className={styles.recipe_wrap}>
            <div className={styles.recipe_body}>
              <div className={styles.recipe_image}>
                <img src={recipe.image} alt={`icon ${recipe.title}`} />
              </div>
              <p>{index + 1 + ". " + recipe.title}</p>
            </div>
            <div className={styles.recipe_actions}>
              <Button label="edit" onClick={() => handleEdit(recipe)} />
              <Button label="remove" onClick={() => handleDelete(recipe)} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default RecipesList;
