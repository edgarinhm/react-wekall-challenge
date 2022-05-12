import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import FormStatus from "../../components/layout/FormStatus";
import Loader from "../../components/layout/Loader";
import styles from "./recipe-form.module.scss";
import useRecipeForm from "./useRecipeForm";

const RecipeForm = () => {
  const {
    formAction,
    handleSubmit,
    OnSubmit,
    register,
    errors,
    isValid,
    handleCancel,
  } = useRecipeForm();
  return (
    <section className={styles.recipe_form_wrap}>
      <h1>Recipes Maker {formAction}</h1>
      <FormStatus />
      <Loader />
      <form onSubmit={handleSubmit(OnSubmit)}>
        <Input
          {...register("title")}
          name="title"
          label="title"
          error={errors.title?.message}
        />
        <Input
          {...register("description")}
          name="description"
          label="description"
          error={errors.description?.message}
        />
        <Input {...register("image")} name="image" label="images" />
        <Input
          {...register("preparation")}
          name="preparation"
          label="preparation"
          error={errors.preparation?.message}
        />
        <Input
          {...register("ingredients")}
          name="ingredients"
          label="ingredients"
          error={errors.ingredients?.message}
        />
        <Input
          {...register("category")}
          name="category"
          label="category"
          error={errors.category?.message}
        />
        <Input
          {...register("notes")}
          name="notes"
          label="notes"
          error={errors.notes?.message}
        />
        <Button
          className={styles.recipe_actions}
          type="submit"
          label="Submit"
          disabled={!isValid}
        />
        <Button label="Cancel" onClick={handleCancel} />
      </form>
    </section>
  );
};

export default RecipeForm;
