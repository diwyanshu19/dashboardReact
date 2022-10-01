import style from './Button.module.css'
export default function Button({children}){

    return (
        <>
         <div className={style.buttonDiv}>
            <button>{children}</button>
         </div>
        </>
    )
}