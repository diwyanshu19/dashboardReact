
import style from './CardBox.module.css'
export default function CardBox(){

    return (
        <>
          <div className = {style.boxproject}>
                <div className = {style.boxprojectfix}>
                    <div className = {style.boxtxt}>
                        <p className = {style.col}>Super Cool Project</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam iusto labore a nesciunt sed officiis minima, non quaerat laboriosam voluptates eligendi adipisci voluptatem hic ex?</p>

                    </div>
                  <div className = {style.boxicons}>
                    <span>⭐️</span>
                    <span>👁</span>
                    <span>🩺</span>
                  </div>
                </div>
            </div>
        </>
    )
}