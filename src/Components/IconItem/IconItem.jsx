import style from './IconItem.module.css'

export default function IconItem({icon,children}){
 
    return (
      <>
       <div className = {style.listcnt1}>
             <span><i className={icon} aria-hidden="true"></i></span>
             <span>{children}</span>
            </div>
      </>
  );
}