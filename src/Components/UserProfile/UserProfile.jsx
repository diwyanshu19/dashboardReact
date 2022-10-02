import logo from '../../img/emojDash.jpeg';
import style from './UserProfile.module.css'
export default function UserProfile({small = false,dash,userhidden,mainhidden}){

    console.log(mainhidden);
    return (
        <>
         <div className={`${!userhidden?!mainhidden?style.userbigdet:mainhidden:userhidden}`}>
            {small && <div className={style.srchuserlogo}>
            <span><i className ="fa fa-bell-o" aria-hidden="true"></i></span>
        </div>}
            <div className={small?style.usersmallimg:style.userbigimg}>
               <img src={logo} alt=""/>
             
            </div>
            <div className={small?style.usersmalldettxt:style.userbigdettxt}>
                {!small &&<span className={`${dash}`}>Hi there,</span>}
                <p className={`${dash}`}>Sethu Ravichandran
                    {!small && <span>(@sethu-che)</span>}
                    </p>

            </div>
        </div>
        </>
    )
}