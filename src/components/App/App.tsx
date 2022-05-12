import { Route, Routes } from "react-router-dom";
import routesPathsContant from "../../constants/routes-paths-constant";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Recipes from "../../pages/Recipes/Recipes";
import { NotMatch } from "../layout/NotMatch";
import RequireAuth from "../RequireAuth/RequireAuth";
import RecipeForm from "../../pages/RecipeForm/RecipeForm";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={routesPathsContant.login} element={<Login />}></Route>
      <Route path={routesPathsContant.signup} element={<Signup />}></Route>
      <Route path={routesPathsContant.index} element={<Home />}></Route>
      <Route
        path={routesPathsContant.recipes}
        element={
          <RequireAuth>
            <Recipes />
          </RequireAuth>
        }
      ></Route>
      <Route
        path={routesPathsContant.recipesAdd}
        element={
          <RequireAuth>
            <RecipeForm />
          </RequireAuth>
        }
      ></Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
