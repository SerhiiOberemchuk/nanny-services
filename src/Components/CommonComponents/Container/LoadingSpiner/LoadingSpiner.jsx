import style from "./LoadingSpiner.module.css";

function LoadingSpiner() {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader}></div>
    </div>
  );
}

export default LoadingSpiner;
