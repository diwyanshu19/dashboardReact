
import styles from './Main.module.css'
import SearchBar from '../SearchBar/SearchBar'
import UserProfile from '../UserProfile/UserProfile'
import Button from '../Button/Button'
import AsidePage from '../../pages/AsidePage/AsidePage'
import BoxPage from '../../pages/BoxPage/BoxPage'

export default function Main(){

    return (
        <>
        <main className={styles.main}>
        <section className={styles.mainWrapperfix}>
        <div className={styles.mainWrapper}>
        <div className={styles.searchUser}>
         <SearchBar/>
         <UserProfile small = {true}/>
         </div>
         <div className={styles.userButton}>
         <UserProfile/>
         <div className={styles.threeButton}>
            <Button>New</Button>
            <Button>Upload</Button>
            <Button>Share</Button>
         </div>
         </div>
         </div>
         </section>
         <section className={styles.mainSection2}>
            <BoxPage/>
            <AsidePage/>
         </section>

        </main>
        </>
    )
}