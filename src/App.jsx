import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("./Pages/HomePage.jsx"));
const NanniesPage = lazy(() => import("./Pages/NanniesPage.jsx"));
const FavoritesPage = lazy(() => import("./Pages/FavoritesPage.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
