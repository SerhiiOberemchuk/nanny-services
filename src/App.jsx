import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { lazy } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import PublicRoute from "./Components/PublicRoute/PublicRoute.jsx";
import PrivateLayout from "./Components/PrivateLayout/PrivateLayout.jsx";

const HomePage = lazy(() => import("./Pages/HomePage.jsx"));
const NanniesPage = lazy(() => import("./Pages/NanniesPage.jsx"));
const FavoritesPage = lazy(() => import("./Pages/FavoritesPage.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              // <PublicRoute> </PublicRoute>
              <HomePage />
            }
          />
        </Route>
        <Route path="/" element={<PrivateLayout />}>
          <Route
            path="/nannies"
            element={
              // <PrivateRoute> </PrivateRoute>
              <NanniesPage />
            }
          />
          <Route
            path="/favorites"
            element={
              // <PrivateRoute></PrivateRoute>
              <FavoritesPage />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
