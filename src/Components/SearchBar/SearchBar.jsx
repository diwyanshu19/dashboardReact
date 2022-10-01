
import styles from './SearchBar.module.css'
export default function SearchBar(){

    return (
        <>
        <div className= {styles.section1Srch}>
         <div className={styles.srchLogo}>
        <span><i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
        <div className={styles.inputBox}>
         <input type="text"/>      
        </div>
        </div>
        </>
    )
}