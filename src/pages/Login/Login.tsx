import FormStatus from "../../components/layout/FormStatus";
import Loader from "../../components/layout/Loader";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import useLogin from "./useLogin";
import "./login.css";

const Login = () => {
  const { handleLogin, handleChange, disabled, error } = useLogin();
  return (
    <section className="login_wrap">
      <FormStatus />
      <Loader />
      <form onSubmit={handleLogin}>
        <Input
          type="name"
          name="name"
          label="name"
          onChange={handleChange}
          error={error.name}
        />
        <Input
          type="email"
          name="email"
          label="email"
          onChange={handleChange}
          error={error.email}
        />
        <Input
          type="password"
          name="password"
          label="password"
          onChange={handleChange}
          error={error.password}
        />
        <div className="actions">
          <Button type="submit" label="Submit" disabled={disabled} />
        </div>
      </form>
    </section>
  );
};

export default Login;
