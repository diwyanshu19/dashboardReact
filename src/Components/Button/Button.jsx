import style from './Button.module.css'
export default function Button({hidden,children,sidehandle = false,clickhid}){
    
   
    return (
        
        <>
         <div className={`${hidden?hidden:''} ${style.buttonDiv} ${clickhid} `} >
            <button onClick={sidehandle==false?undefined:sidehandle}>{children}</button>
         </div>
        </>
    )
}