import style from './AsidePage.module.css'
import emojDash from '../../img/emojDash.jpeg';
export default function AsidePage(){

    return (
        <>
        <aside className = {style.section2part2}>
        <section className={style.section2part2fix}>
        <section className = {style.announcment}>
            <div className = {style.anntext}>
                <span className = {style.col}>Announcements</span>
            </div>
            <div className = {style.annbox}>
            <div className = {style.annboxcnt}>
                <div className = {style.annboxtxt}>
                  <p className ={style.col}>Site Maintenance</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ut eveniet expedita perspiciatis recusandae tempora fugiat alias pariatur velit odit.</p>

                </div>
                <div className ={style.annboxtxt}>
                    <p className= {style.col}>Site Maintenance</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ut eveniet expedita perspiciatis recusandae tempora fugiat alias pariatur velit odit.</p>
                    
                </div>
                <div className= {style.annboxtxt} id={style.imp}>
                    <p className={style.col}>Site Maintenance</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ut eveniet expedita perspiciatis recusandae tempora fugiat alias pariatur velit odit.</p>
                 </div>
            </div>
            </div>
            </section>
            <section className={style.People}>
       
       <div className={style.Peopletext}>
           <span className={style.col}>People</span>
       </div>
       <div className= {style.peoplebox}>
           <section className = {style.Peoplefix}>
           <div className= {style.peopleboxcnt}>
               <div className= {style.imgpeople}>
                  <img src={emojDash} alt=""/>
               </div>
               <div className={style.peopletxt}>
                   <span className= {style.col}>@Carlo</span>
               </div>
           </div>
           <div className={style.peopleboxcnt}>
               <div className= {style.imgpeople}>
                <img src={emojDash} alt=""/>
               </div>
               <div className= {style.peopletxt}>
                   <span className={style.col}>@Jenny</span>
               </div>
           </div>
           <div className= {style.peopleboxcnt}>
               <div className= {style.imgpeople}>
                  <img src= {emojDash} alt=""/>
               </div>
               <div className={style.peopletxt}>
                   <span className={style.col}>@Jaswanth</span>
               </div>
           </div>
       </section>
       </div>
     </section>
    </section>
 </aside>
        </>
    )
}