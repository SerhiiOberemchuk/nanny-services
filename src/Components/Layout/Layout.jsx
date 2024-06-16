import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import { useSelector } from "react-redux";

import LoadingSpiner from "../CommonComponents/Container/LoadingSpiner/LoadingSpiner";
import { selectorIsLoading } from "../../redux/users/selectors";

function Layout() {
  const isLoadingUsers = useSelector(selectorIsLoading);

  return (
    <div className={style.layout}>
      <Suspense fallback={<LoadingSpiner />}>
        <Outlet />
      </Suspense>
      {isLoadingUsers && <LoadingSpiner />}
    </div>
  );
}

export default Layout;
