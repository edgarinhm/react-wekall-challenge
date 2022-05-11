import RecipeCard from "../RecipeCard";
import useRecipeCardsItems from "./useRecipeCardsItems";

interface RecipesCardsItemsProps {
  title: string;
}

const RecipesCardsItems = ({ title }: RecipesCardsItemsProps) => {
  const { recipes } = useRecipeCardsItems();
  return (
    <section>
      <h1>{title}</h1>
      {recipes.map((recipe) => {
        return (
          <RecipeCard
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
