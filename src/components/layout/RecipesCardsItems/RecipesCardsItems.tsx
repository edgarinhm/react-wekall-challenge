import RecipeCard from "../RecipeCard";
import { Recipe } from "../../../interfaces/recipe-interface";
import styles from "./recipes-cards-items.module.scss";

interface RecipesCardsItemsProps {
  title: string;
  recipes: Recipe[];
}

const RecipesCardsItems = ({ title, recipes }: RecipesCardsItemsProps) => {
  return (
    <section>
      <h1 className={styles.cardsitems_title}>{title}</h1>
      <div className={styles.cardsitems_wrap}>
        {recipes.map((recipe, index) => {
          return (
            <RecipeCard
              key={recipe.id}
              title={index + 1 + ". " + recipe.title}
              description={recipe.description}
              icon={recipe.image}
              rating={recipe.rate}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecipesCardsItems;
