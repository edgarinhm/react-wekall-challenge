import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routesPathsContant from "../../constants/routes-paths-constant";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import useForm from "../../hooks/useForm";
import { formStatus } from "../../state/actions/form-actions";
import { signup } from "../../state/actions/user-actions";
import signupValidation from "../../validations/signup-validation";
import UserService from "../../services/user-service";

const useSignup = () => {
  interface FormData {
    [key: string]: string;
    name: string;
    email: string;
    password: string;
  }
  const initState: FormData = {
    name: "",
    email: "",
    password: "",
  };

  const { form, handleChange, disabled, error } = useForm<FormData>(
    initState,
    signupValidation
  );
  const dispatch = useAppDispatch();
  const { authenticated } = useAppSelector((state) => state.session);
  const navigate = useNavigate();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UserService.findUserByEmail(form.email).then((userExist) => {
      if (!userExist) {
        dispatch(
          signup({
            name: form.name,
            id: form.id,
            email: form.email,
            password: form.password,
          })
        ).catch((errorSignup) => {
          dispatch(formStatus(errorSignup.message));
        });
      } else {
        dispatch(formStatus("user exist"));
      }
    });
  };

  useEffect(() => {
    if (authenticated) {
      navigate(routesPathsContant.index);
    }
  }, [authenticated, navigate]);

  return {
    handleSignup,
    handleChange,
    form,
    disabled,
    error,
  };
};

export default useSignup;
