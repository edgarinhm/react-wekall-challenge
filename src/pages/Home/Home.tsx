import Header from "../../components/layout/Header";
import RecipesCardsItems from "../../components/layout/RecipesCardsItems";
import style from "./home.module.scss";
import useHome from "./useHome";

const Home = () => {
  const { topRateRecipes } = useHome();
  return (
    <div className={style.home}>
      <Header />
      <RecipesCardsItems title="Top 10 Recipes" recipes={topRateRecipes} />
    </div>
  );
};

export default Home;
