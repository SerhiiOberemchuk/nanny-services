import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./PrivateLayout.module.css";

import Container from "../CommonComponents/Container/Container";
import Header from "./Header";
import { useSelector } from "react-redux";
import {
  selectorIsLoadingNannies,
  selectorIsLoadingUsers,
} from "../../redux/users/selectors";
import LoadingSpiner from "../CommonComponents/Container/LoadingSpiner/LoadingSpiner";

function PrivateLayout() {
  const isLoadingUsers = useSelector(selectorIsLoadingUsers);
  const isLoadingNannies = useSelector(selectorIsLoadingNannies);

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
      {(isLoadingNannies || isLoadingUsers) && <LoadingSpiner />}
    </>
  );
}

export default PrivateLayout;
