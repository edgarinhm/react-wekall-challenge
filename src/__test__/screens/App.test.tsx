import { render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Login from "../../pages/Login";
import { store, persistor } from "../../state/store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<div>...</div>}></Suspense>
          <Login />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
  const linkElement = screen.getByText(/email/i);
  expect(linkElement).toBeInTheDocument();
});
