import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAppSelector from "../../hooks/useAppSelector";
import recipeValidation from "../../validations/recipe-validation";
import RecipeService from "../../services/recipe-service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routesPathsContant from "../../constants/routes-paths-constant";
import useAppDispatch from "../../hooks/useAppDispatch";
import { formResetRecipe } from "../../state/actions/form-actions";

const useRecipeForm = () => {
  const { recipe } = useAppSelector((state) => state.form);
  const { user } = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formAction = !!recipe.id ? "Edit" : "Add";

  interface FormData {
    [key: string]: string;
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    author: string;
    preparation: string;
    ingredients: string;
    updated: string;
    created: string;
    notes: string;
  }
  const initialValues: FormData = {
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    author: "",
    preparation: "",
    ingredients: "",
    updated: Date(),
    created: !!recipe.id ? recipe.created : Date(),
    notes: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setValue,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: initialValues,
    resolver: yupResolver(recipeValidation),
  });

  const covert2base64 = async (file: FileList | string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file[0]! as Blob);
      fileReader.onload = () => {
        resolve(fileReader.result?.toString() || "");
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const validateImageEncode = async (form: FormData): Promise<string> => {
    return covert2base64(form.image);
  };

  const OnSubmit = async (form: FormData) => {
    const imageBase64 = await validateImageEncode(form);
    if (formAction === "Add") {
      RecipeService.addRecipe({
        ...form,
        image: imageBase64,
        checked: false,
        rate: 0,
      }).then(() => navigate(routesPathsContant.recipes));
    } else {
      RecipeService.updateRecipe({
        ...form,
        image: imageBase64,
        checked: false,
        rate: 0,
      }).then(() => {
        dispatch(formResetRecipe());
        navigate(routesPathsContant.recipes);
      });
    }
  };

  useEffect(() => {
    setValue("id", recipe.id);
    setValue("title", recipe.title);
    setValue("description", recipe.description);
    setValue("image", recipe.image);
    setValue("category", recipe.category);
    setValue("author", user.id);
    setValue("preparation", recipe.preparation);
    setValue("ingredients", recipe.ingredients);
    setValue("updated", Date());
    setValue("created", !!recipe.id ? recipe.created : Date());
    setValue("notes", recipe.notes);
  }, []);

  const handleCancel = () => {
    dispatch(formResetRecipe());
    navigate(routesPathsContant.recipes);
  };

  return {
    formAction,
    register,
    errors,
    handleSubmit,
    OnSubmit,
    isValid,
    handleCancel,
  };
};

export default useRecipeForm;
