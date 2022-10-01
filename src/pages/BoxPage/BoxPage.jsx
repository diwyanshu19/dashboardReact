import style from './BoxPage.module.css'
import CardBox from '../../Components/CardBox/CardBox'
export default function BoxPage(){

    return (
        <>
    <section className = {style.section2part1}>
     <p id={style.pr}>Your Projects</p>
        <div className = {style.projectboxcnt}>
        <div className = {style.projectboxcntfix}>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        </div>
        </div>
        </section>
        </>
    )
}