import Button from "../../../components/common/Button/Button";
import useRecipesList from "./useRecipesList";
import { Recipe } from "../../../interfaces/recipe-interface";
import styles from "./recipes-list.module.scss";

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList = ({ recipes }: RecipesListProps) => {
  const { handleAdd, handleEdit, handleDelete } = useRecipesList();
  return (
    <section>
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
              <div>
                <p>
                  <strong>#{index + 1 + ". " + recipe.title}</strong>
                </p>
                <p>
                  <strong>Category:</strong> {recipe.category}
                </p>
                <p>
                  <strong>Ingredients:</strong> {recipe.ingredients}
                </p>
              </div>
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
