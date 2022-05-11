import RecipeCard from "../RecipeCard";
import { Recipe } from "../../../interfaces/recipe-interface";

interface RecipesCardsItemsProps {
  title: string;
  recipes: Recipe[];
}

const RecipesCardsItems = ({ title, recipes }: RecipesCardsItemsProps) => {
  return (
    <section>
      <h1>{title}</h1>
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            icon={recipe.image}
          />
        );
      })}
    </section>
  );
};

export default RecipesCardsItems;
