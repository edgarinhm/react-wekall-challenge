import { Validation } from "../interfaces/validation-interface";
const loginValidation: Validation[] = [
  { label: "name", required: true, message: "name is required" },
];

export default loginValidation;
