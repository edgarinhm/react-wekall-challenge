import { useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import useForm from "../../hooks/useForm";
import { login } from "../../state/actions/user-actions";
import { formStatus } from "../../state/actions/form-actions";
import loginValidation from "../../validations/login-validation";
import routesPathsContant from "../../constants/routes-paths-constant";

const useLogin = () => {
  interface FormData {
    [key: string]: string;
    name: string;
  }
  const initState: FormData = {
    name: "",
  };

  const { form, handleChange, disabled, error } = useForm<FormData>(
    initState,
    loginValidation
  );
  const dispatch = useAppDispatch();
  const { authenticated } = useAppSelector((state) => state.session);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login()).catch((errorLogin) => {
      dispatch(formStatus(errorLogin.message));
    });
  };

  useEffect(() => {
    if (authenticated) {
      navigate(routesPathsContant.index);
    }
  }, [authenticated, navigate]);

  return {
    handleLogin,
    handleChange,
    form,
    disabled,
    error,
  };
};

export default useLogin;
