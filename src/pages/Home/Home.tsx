import Header from "../../components/layout/Header";
import RecipesCardsItems from "../../components/layout/RecipesCardsItems";
import style from "./home.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <Header />
      <RecipesCardsItems title="Top 10 Recipes" />
    </div>
  );
};

export default Home;
