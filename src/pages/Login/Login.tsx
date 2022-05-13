import FormStatus from "../../components/layout/FormStatus";
import Loader from "../../components/layout/Loader";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import useLogin from "./useLogin";
import styles from "./login.module.scss";
import routesPathsContant from "../../constants/routes-paths-constant";
import { Link } from "react-router-dom";

import background from "../../assets/media/login.png";

const Login = () => {
  const { handleLogin, handleChange, disabled, error } = useLogin();
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section style={myStyle} className={styles.login_wrap}>
      <h1>Fun Cooking</h1>
      <FormStatus />
      <Loader />
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          name="email"
          label="email"
          placeholder="email"
          onChange={handleChange}
          error={error.email}
        />
        <Input
          type="password"
          name="password"
          label="password"
          placeholder="password"
          onChange={handleChange}
          error={error.password}
        />
        <div className={styles.actions}>
          <Button
            className={styles.login_submit}
            type="submit"
            label="Sign In"
            disabled={disabled}
          />
        </div>
        <div className={styles.links}>
          Don’t have an account?
          <Link to={routesPathsContant.signup}>Sign Up</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
