import { Validation } from "../interfaces/validation-interface";
const loginValidation: Validation[] = [
  { label: "name", required: true, message: "name is required" },
  { label: "email", required: true, message: "email is required" },
  { label: "password", required: true, message: "password is required" },
];

export default loginValidation;
