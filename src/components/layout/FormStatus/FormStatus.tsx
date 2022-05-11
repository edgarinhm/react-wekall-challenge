import { useEffect } from "react";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import { formStatus } from "../../../state/actions/form-actions";
import style from "./form-status.module.scss";

const FormStatus = () => {
  const { message } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (message !== "") dispatch(formStatus(""));
  }, [dispatch]);
  return <>{message && <div className={style.form_status}>{message}</div>}</>;
};

export default FormStatus;
