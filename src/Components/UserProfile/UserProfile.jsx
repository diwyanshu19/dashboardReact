import logo from '../../img/emojDash.jpeg';
import style from './UserProfile.module.css'
export default function UserProfile({small = false}){

    console.log(small);
    return (
        <>
         <div className={style.userbigdet}>
            {small && <div className={style.srchuserlogo}>
            <span><i className ="fa fa-bell-o" aria-hidden="true"></i></span>
        </div>}
            <div className={small?style.usersmallimg:style.userbigimg}>
               <img src={logo} alt=""/>
             
            </div>
            <div className={small?style.usersmalldettxt:style.userbigdettxt}>
                {!small &&<span>Hi there,</span>}
                <p>Sethu Ravichandran
                    {!small && <span>(@sethu-che)</span>}
                    </p>
            </div>
        </div>
        </>
    )
}