import style from './Container.module.css'

function Container({children}) {
    return <div className={style.contairer}>{children }</div>;
}

export default Container;
