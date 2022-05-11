import { useDispatch as useReduxDispatch } from "react-redux";
import { AppDispatch } from "../state/store";

const useAppDispatch = () => useReduxDispatch<AppDispatch>();

export default useAppDispatch;
