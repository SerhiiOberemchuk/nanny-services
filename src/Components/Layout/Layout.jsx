import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

function Layout() {
  return (
    <div className={style.layout}>
      <Suspense fallback={"Loading...."}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
