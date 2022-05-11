import { Route, Routes } from "react-router-dom";
import routesPathsContant from "../../constants/routes-paths-constant";
import Login from "../../pages/Login";
import { NotMatch } from "../layout/NotMatch";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={routesPathsContant.login} element={<Login />}></Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
