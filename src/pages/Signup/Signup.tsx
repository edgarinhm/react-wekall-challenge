import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import FormStatus from "../../components/layout/FormStatus";
import Loader from "../../components/layout/Loader";
import useSignup from "./useSignup";
import styles from "./signup.module.scss";
import { Link } from "react-router-dom";
import routesPathsContant from "../../constants/routes-paths-constant";

const Signup = () => {
  const { handleSignup, handleChange, disabled, error } = useSignup();
  return (
    <section className={styles.signup_wrap}>
      <h1>Signup</h1>
      <FormStatus />
      <Loader />
      <form className={styles.signup_form} onSubmit={handleSignup}>
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
        <div className={styles.signup_actions}>
          <Button type="submit" label="Signup" disabled={disabled} />
        </div>
        <div className={styles.signup_links}>
          <Link to={routesPathsContant.login}>login</Link>
        </div>
      </form>
    </section>
  );
};

export default Signup;
