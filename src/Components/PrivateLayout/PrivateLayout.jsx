import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./PrivateLayout.module.css";

import Container from "../CommonComponents/Container/Container";
import Header from "./Header";

function PrivateLayout() {
  return (
    <>
      <header className={style.headerSection}>
        <Container>
          <Header />
        </Container>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default PrivateLayout;
