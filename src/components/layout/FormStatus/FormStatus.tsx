import { useEffect } from "react";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import { formStatus } from "../../../state/actions/form-actions";

const FormStatus = () => {
  const { message } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(formStatus(""));
  }, [dispatch]);
  return <>{message && <div className="form_status">{message}</div>}</>;
};

export default FormStatus;
