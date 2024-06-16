import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./PrivateLayout.module.css";

import Container from "../CommonComponents/Container/Container";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectorIsLoading } from "../../redux/users/selectors";
import LoadingSpiner from "../CommonComponents/Container/LoadingSpiner/LoadingSpiner";

function PrivateLayout() {
  const isLoading = useSelector(selectorIsLoading);

  return (
    <>
      <header className={style.headerSection}>
        <Container>
          <Header />
        </Container>
      </header>

      <main>
        <section className={style.main}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
      {isLoading && <LoadingSpiner />}
    </>
  );
}

export default PrivateLayout;
