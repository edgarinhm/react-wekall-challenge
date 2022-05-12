import FormStatus from "../../components/layout/FormStatus";
import Loader from "../../components/layout/Loader";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import useLogin from "./useLogin";
import styles from "./login.module.scss";
import routesPathsContant from "../../constants/routes-paths-constant";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleLogin, handleChange, disabled, error } = useLogin();
  return (
    <section className={styles.login_wrap}>
      <h1>Login</h1>
      <FormStatus />
      <Loader />
      <form onSubmit={handleLogin}>
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
        <div className={styles.actions}>
          <Button type="submit" label="Submit" disabled={disabled} />
        </div>
        <div className={styles.links}>
          <Link to={routesPathsContant.signup}>signup</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
