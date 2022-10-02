
import style from './SideBar.module.css'
import IconItem from './../IconItem/IconItem'
import Button from '../Button/Button'
import UserProfile from '../UserProfile/UserProfile'
export default function SideBar({sidehandle,side}){
  
    return (
        <>
        <main className={`${style.main}`}>
            <aside className={`${style.asidefirst} ${side?style.show:''}`}>
            <div className={style.logo}>
              <div className={style.logoimg}><i className="fa fa-windows" aria-hidden="true"></i></div>
              <div className= {style.logotext}>Dashboard</div>
              <Button hidden = {style.hidden} sidehandle = {sidehandle}>⬅</Button>
            </div>
             <UserProfile small = {true} dash = {style.userDashBoard} userhidden = {style.userhidden}/>
            <div className= {style.list_1}>
            <div className= {style.listcontain1}>
             <IconItem icon = {"fa fa-home"}>Home</IconItem>
             <IconItem icon = {"fa fa-commenting-o"}>Profile</IconItem>
             <IconItem icon = {"fa fa-history"}>Messages</IconItem>
             <IconItem icon = {"fa fa-tasks"}>History</IconItem>
             <IconItem icon = {"fa fa-users"}>Task</IconItem>
             <IconItem icon = {"fa fa-cog"}>communities</IconItem>
           </div>
           </div>
           <div className={style.list_2}>
           <div className={style.listcontain1}>
            <IconItem icon = {"fa fa-ticket"}>Settings</IconItem>
             <IconItem icon = {"fa fa-user-md"}>support</IconItem>
             <IconItem icon = {"fa fa-user-secret" }>privacy</IconItem>
            </div>
            </div>
            </aside>
        </main>
        </>
    )
}