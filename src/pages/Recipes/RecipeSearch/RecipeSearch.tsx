import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import useRecipeSearch from "./useRecipeSearch";
import styles from "./recipe-search.module.scss";

const RecipeSearch = () => {
  const { handleSearch, handleChange } = useRecipeSearch();
  return (
    <section className={styles.recipe_search_subNav}>
      <div className={styles.recipe_search_content}>
        <div className={styles.recipe_search_container}>
          <form className={styles.recipe_search_form} onSubmit={handleSearch}>
            <Input
              name="filter"
              placeholder="Find a Recipe"
              onChange={handleChange}
              className={styles.recipe_search_input}
            />
            <Button type="submit">
              <span className="icon icon-search utility-icon color-navigation">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"></path>
                </svg>
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecipeSearch;
