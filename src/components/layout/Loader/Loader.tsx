import useAppSelector from "../../../hooks/useAppSelector";

const Loader = () => {
  const { isLoading } = useAppSelector((state) => state.form);
  return <>{isLoading && <div className="form_loader">... Loading</div>}</>;
};

export default Loader;
